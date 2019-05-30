import React, {Component} from 'react';
import Form from "./components/Form";
import Weather from "./components/weather";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };

    getCelcius = (tempInKelvins) => {
        return tempInKelvins - 273.15
    };


    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api_call.json();
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
        console.log(data);
    };

    render() {
        const {temperature, city, country, humidity, description, error } = this.state;
        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <Weather
                    temperature={temperature}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error}
                />
            </div>
        );
    }
}

export default App;
