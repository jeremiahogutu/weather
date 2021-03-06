import React, {Component} from 'react';
import Form from "./components/Form";
import Weather from "./components/weather";
import {Grid} from "@material-ui/core";
import './App.css'
import WeatherContainer from "./components/WeatherContainer";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: ''
    };

    getCelcius = (tempInKelvins) => {
        return Math.round(tempInKelvins - 273.15)
    };
    
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        try {
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
            if (!api_call.ok) {
                this.setState({
                    temperature: '',
                    city: '',
                    country: '',
                    humidity: '',
                    description: '',
                    icon: '',
                    error: "City not found"
                });
                throw Error(api_call.status)
            }
            const data = await api_call.json();
            this.setState({
                temperature: `${this.getCelcius(data.main.temp)}°C`,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                error: ""
            })
        } catch (e) {
            console.log(e)
        }
        if (!city && !country) {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                icon: undefined,
                error: "Please enter city and country"
            });
        }
    };

    render() {
        const {temperature, city, country, humidity, description, error, icon} = this.state;
        return (
            <div style={{display: 'flex', justifyContent: 'center', height: '100vh'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '1100px'}}>
                    <Grid container style={{background: '#212121'}}>
                        <Grid item xs={12}>
                            <WeatherContainer icon={icon}/>
                            <Form getWeather={this.getWeather}/>
                            <Weather
                                temperature={temperature}
                                city={city}
                                country={country}
                                humidity={humidity}
                                description={description}
                                error={error}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
