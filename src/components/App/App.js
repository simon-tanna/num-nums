import "./App.css";
import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>Num Nums</h1>
				<SearchBar />
				<BusinessList />
			</div>
		);
	}
}

export default App;
