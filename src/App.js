import "./App.css";
import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Users from "./containers/Users/Users";
import List from "./containers/Lists/Lists";
import AboutUs from "./components/AboutUs/AboutUs";
import Map from "./components/Map/Map";
import mainPage from "./mainPage";

class App extends Component {
	render() {
		return (
			<div className="App">
				<nav>
					<div class="logo">
						<NavLink to="/" className="inactive" activeClassName="active">
							Logo
						</NavLink>
					</div>
					<ul className="navUl">
						<li>
							<NavLink
								to="/users"
								className="inactive"
								activeClassName="active"
							>
								Users
							</NavLink>
						</li>
						<li>
							<NavLink to="/list" className="inactive" activeClassName="active">
								List
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about-us"
								className="inactive"
								activeClassName="active"
							>
								About us
							</NavLink>
						</li>
						<li>
							<NavLink to="/map" className="inactive" activeClassName="active">
								Map
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className="content">
					<Switch>
						<Route path="/users" component={Users} />
						<Route path="/list" component={List} />
						<Route path="/about-us" component={AboutUs} />
						<Route path="/map" component={Map} />
						<Route path="/" component={mainPage} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
