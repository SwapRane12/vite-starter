import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ColorScheme, ColorSchemeProvider, MantineProvider, useEmotionCache} from "@mantine/core";
import {useColorScheme, useLocalStorage} from "@mantine/hooks";
import {CacheProvider} from "@emotion/react";

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
					
					
					<div className="App">
						<div>
							<a href="https://vitejs.dev" target="_blank">
								<img src={viteLogo} className="logo" alt="Vite logo"/>
							</a>
							<a href="https://reactjs.org" target="_blank">
								<img src={reactLogo} className="logo react" alt="React logo"/>
							</a>
						</div>
						<h1>Vite + React</h1>
						<div className="card">
							<button onClick={() => setCount((count) => count + 1)}>
								count is {count}
							</button>
							<p>
								Edit <code>src/App.tsx</code> and save to test HMR
							</p>
						</div>
						<p className="read-the-docs">
							Click on the Vite and React logos to learn more
						</p>
					</div>
				</MantineProvider>
			
			</ColorSchemeProvider>
		</CacheProvider>
	)
}

export default App
