import React from 'react';
import './App.css';
import Form from './components/Form';
import Response from './components/Response';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: ''
        };
    }

    getToken = (value) => {
        this.setState({ response: value })
    };

    render() {
        return (
            <div className = "App">
                <Form getToken = { this.getToken }/>
                <Response token = { this.state.response } />
            </div>
        );
    }
}

export default App;
