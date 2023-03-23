import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ColorScheme, ColorSchemeProvider, MantineProvider, useEmotionCache} from "@mantine/core";
import {useColorScheme, useLocalStorage} from "@mantine/hooks";
import {CacheProvider} from "@emotion/react";
import {AppRouter} from "./routes";

function App() {
	const [count, setCount] = useState(0)
	const preferredColorScheme = useColorScheme()
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'mantine-color-scheme',
		defaultValue: preferredColorScheme,
		getInitialValueInEffect: true
	})
	
	const cache = useEmotionCache()
	
	const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
	
	return (
		<CacheProvider value={cache}>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				
				<MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme}}>
					
					
					<AppRouter/>
				</MantineProvider>
			
			</ColorSchemeProvider>
		</CacheProvider>
	)
}

export default App
