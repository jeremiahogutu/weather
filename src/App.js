import React, {Component} from 'react';
import Form from "./components/Form";
import Weather from "./components/weather";

const API_KEY = '';

class App extends Component {
    render() {
        return (
            <div>
                <p>Hello</p>
                <Form/>
                <Weather/>
            </div>
        );
    }
}

export default App;
