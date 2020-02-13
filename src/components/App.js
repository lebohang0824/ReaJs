import React from 'react';
import axios from 'axios';
import './App.scss';

class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = { welcome: ''}
	}

	componentDidMount() {
		axios.get('/api/message').then(res => {
			this.setState({ welcome: res.data });
		});
	}


	render() {
		return this.state.welcome; 
	}

}

export default App;
