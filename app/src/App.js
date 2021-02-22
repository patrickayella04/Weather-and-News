import React from 'react';
import axios from 'axios';
import './App.css';
import DisplayWeather from './components/DisplayWeather';
import Navbar from './components/Navbar.js';



class App extends React.Component  {
  // Default state of long and lat but to be changed to current
  state = {
    coords: {
      latitude: 45,
      longitude: 60
    },
    data: {},
    inputData:''
  }

  componentDidMount() {
    // Get device location -
    // How do we get device location? We use html 5 api which has a navigator object to get the device location. First we check if the geolocation is supported in the system.  
    if (navigator.geolocation) {

      //console.log('Supported')
      //We call a method to get our current device location position. This method getCurrentPosition requires passing a function to run. And this function requires a argument (call it what ever you want). But it will basically give you the position object. 
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude)
        // Set current coords into a variable called newCoords
        let newCoords = { 
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        // Set default state equal to newCoords on component mount.
        this.setState({ coords: newCoords });

        // Api call
        axios.get(`http://api.weatherstack.com/current?access_key=823d378bc0e421a61a1daa5a563e3104&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
          // console.log(res);
          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0], 
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons
          }
          // Here we put our weather data into our state
          this.setState({ data: weatherData });
        })
      });
    } else {
      console.log('not supported')
    }
  }

  // Track the input field - (e.target.value is passed in as argument in onChange in Navbar component and city represents the argument as we console log the cit. We get the input value)
  change = (city) => {
    // console.log(city)
    this.setState({inputData: city})
  }

  // Change City weather
  changeWeather = (event) => {
    event.preventDefault();

    // api call 
    axios.get(`http://api.weatherstack.com/current?access_key=823d378bc0e421a61a1daa5a563e3104&query=${this.state.inputData}`).then(res => {
      console.log(res);

      let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0], 
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons
          }
          // Here we put our new weather data into our state
          this.setState({ data: weatherData });
    })
  }

  render() {
      return (
      
        <div className="App">
          <div className="container">
            <Navbar changeWeather={this.changeWeather} changeRegion={this.change}/>
          <DisplayWeather weatherData={this.state.data}/>
          </div>
          
          
      </div>
      
    );
  }
  
}

export default App;
