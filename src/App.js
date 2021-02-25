import React from 'react';
// import axios from 'axios';
import './App.css';
import DisplayWeather from './components/DisplayWeather';
import Navbar from './components/Navbar.js';
//import Sunny from './components/sunny';




class App extends React.Component  {
  // Default state of long and lat but to be changed to current
  
  state = {

    coords: {
      latitude: 45,
      longitude: 60
    },
    defaultWeather: {
      id: '0',
      type: 'Very Grey',
      icon: 'http://getwallpapers.com/wallpaper/full/3/e/4/924867-vertical-sunny-day-background-2574x2000-windows-10.jpg',
      temp: '7',
      windSpeed: '-2',
      Humidity: '67',
      city: 'London',
      country: 'United Kingdom'

    },
    data: {},
    inputData: '',
    
    weatherPlace: [
      {
        'id': '1',
        'type': 'Grey',
        'icon': 'http://4.bp.blogspot.com/_f_OmAdlU5os/TM6pNOC3jlI/AAAAAAAACSc/oFNogp59a-Y/s1600/rain-clouds-6.JPG',
        'temp': '7',
        'windSpeed': '13',
        'Humidity': '89',
        'city': ''
        
      },
      {
        'id': '2',
        'type': 'Rain',
        'icon':'https://il3.picdn.net/shutterstock/videos/8177929/thumb/1.jpg',
        'temp': '12',
        'windSpeed': '8',
        'Humidity': '50',
        'city': ''
      },
      {
        'id': '3',
        'type': 'clear',
        'icon':'https://snapshotsofwanaka.files.wordpress.com/2013/06/20130606-161727.jpg',
        'temp': '17',
        'windSpeed': '5',
        'Humidity': '58',
        'city': ''
      },
      {
        'id': '10',
        'type': 'bright',
        'icon':'http://i.huffpost.com/gen/1349857/images/o-BRIGHT-SUNRISE-facebook.jpg',
        'temp': '21',
        'windSpeed': '16',
        'Humidity': '76',
        'city': ''
      },
      {
        'id': '9',
        'type': 'sunny',
        'icon':'http://getwallpapers.com/wallpaper/full/3/e/4/924867-vertical-sunny-day-background-2574x2000-windows-10.jpg',
        'temp': '25',
        'windSpeed': '14',
        'Humidity': '47',
        'city': ''
      },
      {
        'id': '8',
        'type': 'Bright sunny',
        'icon':'https://images.fineartamerica.com/images-medium-large-5/summer-sky-with-bright-sun-rike-.jpg',
        'temp': '30',
        'windSpeed': '6',
        'Humidity': '20',
        'city': ''
      }
    ],

    localData: {},
    homeTown: {},
    newsData: {}
     
    
    
  }

  componentDidMount() {
    // Get device location -
    // How do we get device location? We use html 5 api which has a navigator object to get the device location. First we check if the geolocation is supported in the system.  
    //if (navigator.geolocation) {

      //console.log('Supported')
      //We call a method to get our current device location position. This method getCurrentPosition requires passing a function to run. And this function requires a argument (call it what ever you want). But it will basically give you the position object. 
      //navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude)
        // Set current coords into a variable called newCoords
        // let newCoords = { 
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude
        // }

        // Set default state equal to newCoords on component mount.
        // this.setState({ coords: newCoords });

        // Api call
    //     axios.get(`http://api.weatherstack.com/current?access_key=823d378bc0e421a61a1daa5a563e3104&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
    //       // console.log(res);
    //       let weatherData = {
    //         location: res.data.location.name,
    //         temperature: res.data.current.temperature,
    //         description: res.data.current.weather_descriptions[0], 
    //         region: res.data.location.region,
    //         country: res.data.location.country,
    //         wind_speed: res.data.current.wind_speed,
    //         pressure: res.data.current.pressure,
    //         precip: res.data.current.precip,
    //         humidity: res.data.current.humidity,
    //         img: res.data.current.weather_icons
    //       }
    //       // Here we put our weather data into our state
    //       this.setState({ data: weatherData });
    //     })
    //   });
    // } else {
    //   console.log('not supported')
    // };

     let deWeather = this.state.defaultWeather;

     this.setState({localData: deWeather})
  }

  // Track the input field - (e.target.value is passed in as argument in onChange in Navbar@ component and city represents the argument as we console log the cit. We get the input value)
  

  // Change City weather

  




change = (city) => {
  this.setState({ inputData: city })
  this.setState({ homeTown: city });
}


changeWeather = (event) => {
  event.preventDefault();
  const i = Math.floor(Math.random() * 5) + 1;
  if (i <= 2) {
    let localWeather = this.state.weatherPlace[i];
    this.setState({ localData: localWeather });
    let city = this.state.weatherPlace[i].city;
    this.setState({ inputData: city });
    this.state.weatherPlace[i].city = this.state.homeTown;
    
  } else if (i >= 3) {
    let localWeather = this.state.weatherPlace[i];
    this.setState({ localData: localWeather });
    this.state.weatherPlace[i].city = this.state.homeTown;
  }
}
        
      
  
  
   
    // let inputCity = this.state.weatherPlace[i].city;

      
    //console.log(this.state.weatherPlace[0].icon);
    // let localWeather = this.state.weatherPlace[i] 



    // api call 
    // axios.get(`http://api.weatherstack.com/current?access_key=823d378bc0e421a61a1daa5a563e3104&query=${this.state.inputData}`).then(res => {
    //   console.log(res);

    //   let weatherData = {
    //         location: res.data.location.name,
    //         temperature: res.data.current.temperature,
    //         description: res.data.current.weather_descriptions[0], 
    //         region: res.data.location.region,
    //         country: res.data.location.country,
    //         wind_speed: res.data.current.wind_speed,
    //         pressure: res.data.current.pressure,
    //         precip: res.data.current.precip,
    //         humidity: res.data.current.humidity,
    //         img: res.data.current.weather_icons
    //       }
    //       // Here we put our new weather data into our state
    //       this.setState({ data: weatherData });
    //})
  
  


  render() {
      return (
      
        <div className="App">
          <div className="container">
            <Navbar changeWeather={this.changeWeather} changeRegion={this.change}/>
            <DisplayWeather localWeather={this.state.localData} weatherData={this.state.data} />
            
          </div>
          
          
      </div>
      
    );
  }
  
}

export default App;
