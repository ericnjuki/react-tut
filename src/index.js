// import React and ReactDOM
import React from "react";
import * as ReactDOMClient from 'react-dom/client';


// get ref to the div with id="root"
const el = document.getElementById('root');

// tell react to take control of that element
const root = ReactDOMClient.createRoot(el);

// create a component
const AppFunc = () => {

	return (
		<h1>hi there</h1>
	);
}

class App extends React.Component {
	state = {
		lat: 0,
		errorMessage: ''
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error })
        )
	}

	render() {
		return <div>Latitude: {this.state.lat}</div>
	}
}

// render the component
root.render(<App />)