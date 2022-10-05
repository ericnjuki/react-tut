// import React and ReactDOM
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import SeasonDisplay from "./SeasonDisplay";


// get ref to the div with id="root"
const el = document.getElementById('root');

// tell react to take control of that element
const root = ReactDOMClient.createRoot(el);

// create a component
class App extends React.Component {
	state = {
		lat: null,
		errorMessage: ''
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
            (position) => { 
				fetch('https://api.ipregistry.co/?key=tryout')
				.then(function (response) {
					return response.json();
				})
				.then(function (payload) {
					console.log(payload.location.country.name + ', ' + payload.location.city);
				});
				this.setState({ lat: position.coords.latitude })},
            (error) => this.setState({ errorMessage: error })
        )
	}

	render() {
		return (
			<div>
				{this.state.lat && <SeasonDisplay lat={this.state.lat} />}
				{this.state.errorMessage && <div>error: {this.state.errorMessage}</div>}
				{!this.state.lat && !this.state.errorMessage && <div>Loading...</div>}
			</div>
		)
	}
}

// render the component
root.render(<App />)