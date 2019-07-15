import React from 'react';
import { TextField } from 'material-ui';
import { RaisedButton } from "material-ui";
import { Paper } from "material-ui";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.submit = this.submit.bind(this);
    };

    update = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    submit = async () => {
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        let resp = await fetch('http://localhost:8080/signin', {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const response = await resp.json();
        this.props.getToken(response);
    }

    render() {
        return (
                <Paper style={{width: 300, padding: 20, margin: 'auto', marginTop: 20 + 'vh', textAlign: 'center'}}>
                    <TextField
                        name = 'email'
                        hintText = 'Email'
                        floatingLabelText = 'Email'
                        value = { this.state.email }
                        onChange = { e => this.update(e) }
                        floatingLabelFixed
                    /><br />
                    <TextField
                        name = 'password'
                        hintText = 'Password'
                        floatingLabelText = 'Password'
                        value = { this.state.password }
                        onChange = { e => this.update(e) }
                        type = 'password'
                        floatingLabelFixed
                    /><br />
                    <RaisedButton label = 'Log in' onClick = { e => this.submit(e) } primary/>
                </Paper>
        );
    }
}

export default Form;
