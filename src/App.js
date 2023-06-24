/*REACT-ROUTER*/

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

/*IMPORT SCRIPTS*/

import ScrollToTop from "./utils/scrollToTop";

/*STYLES IMPORTS*/

import "./styles/style.css";
import "./styles/space.css";

/*IMPORTS COMPONENTS*/

import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Icon from "./components/Icon/Icon";

function App() {
	return (
		<div className="App">
			<main className="container">
				<React.Fragment>
					<Router>
					<ScrollToTop />
						<Header />
						<Icon />
						<div className="desktop-pages">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/work" element={<Work />} />
								<Route path="/contact" element={<Contact />} />
							</Routes>
						</div>
						<div className="mobile-pages" id="home">
							<Home />
							<About />
							<Work />
							<Contact />
						</div>
					</Router>
				</React.Fragment>
    		</main>
		</div>
	);
}

export default App;