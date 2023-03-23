import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/About";
import {IndexPage} from "./pages";

export const AppRouter: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<IndexPage/>}/>
				<Route path="/about" element={<AboutPage/>}/>
			</Routes>
		</BrowserRouter>
	)
}