import React from 'react';
// import axios from 'axios';
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
    defaultWeather: {
      id: '0',
      type: 'very grey',
      icon: 'very-grey',
      temp: '7',
      windSpeed: '-2',
      precip: '',
      Humidity: '67',
      city: 'London',
      
      localPic: './components/pexels-brett-sayles-912364.jpg'

    },
    data: {},
    inputData: '',
    
    weatherPlace: [ 
      {
        'id': '1',
        'type': 'grey',
        'icon': 'grey',
        'temp': '7',
        'precip': '',
        'Humidity': '89',
        'city': ''
        
      },
      {
        'id': '2',
        'type': 'rain',
        'icon':'rain',
        'temp': '12',
        'precip': '',
        'Humidity': '89',
        
        'city': ''
      },
      {
        'id': '3',
        'type': 'clear',
        'icon':'clear',
        'temp': '17',
        'precip': '',
        'Humidity': '89',
        'city': ''
      },
      {
        'id': '10',
        'type': 'bright',
        'icon':'bright',
        'temp': '21',
        'precip': '',
        'Humidity': '89',
        'city': ''
      },
      {
        'id': '9',
        'type': 'sunny',
        'icon':'sunny',
        'temp': '25',
        'precip': '',
        'Humidity': '89',
        'city': ''
      },
      {
        'id': '8',
        'type': 'bright sunny',
        'icon':'bright-sunny',
        'temp': '30',
        'precip': '',
        'Humidity': '89',
        'city': ''
      },
      {
        'id': '1',
        'type': 'very grey',
        'icon': 'very-grey',
        'temp': '7',
        
        'precip': '',
        'Humidity': '89',
        'city': ''
        
      },
      
    ],

    localData: {},
    homeTown: {},
    newsData: {},
    temp: '',
    clearInput: true
     
    
    
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
    // let temP = Math.floor(Math.random() * 30) + 1;

    // Default temp
    let temP = this.state.defaultWeather.temp
    this.setState({ temp: temP });

    // Preciptation
    let Precipitation = Math.floor(Math.random() * 30) + 1;
    this.state.defaultWeather.precip = Precipitation
    this.setState({ precip: Precipitation });

    // Humitity 
    let humidity = Math.floor(Math.random() * 30) + 1;
    this.state.defaultWeather.Humidity = humidity
    this.setState({ Humidity: humidity });
   


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


    // Change Weather data
    const i = Math.floor(Math.random() * 7) ;
    if (i <= 2) {
      let localWeather = this.state.weatherPlace[i];
    
      this.setState({ localData: localWeather });
      const city = this.state.weatherPlace[i].city;
      this.setState({ inputData: city });
      this.state.weatherPlace[i].city = this.state.homeTown;
    
    } else if (i >= 3) {
      let localWeather = this.state.weatherPlace[i];

      
      this.setState({ localData: localWeather });
      let city = this.state.weatherPlace[i].city;
      this.setState({ inputData: city });
      this.state.weatherPlace[i].city = this.state.homeTown;
    }



    console.log(this.state.weatherPlace[i].city)
    // Change weather temperature
    let temP = Math.floor(Math.random() * 30) + 1;
    console.log(temP)
    this.setState({ temp: temP });

    //Clear input
    let clear = false;
    this.setState({ clearInput: clear })
   
      setTimeout(() => {
        this.setState({
          clearInput: true
        });
        console.log(this.state.clearInput)
      }, 1000)
  
   
      
    
    
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
            <Navbar changeWeather={this.changeWeather} changeRegion={this.change} clearInput={this.state.clearInput}/>
            <DisplayWeather localWeather={this.state.localData} temperature={this.state.temp} weatherData={this.state.data} greeting={this.state.hello} />
            
          </div>
          
          
      </div>
      
    );
  }
  
}

export default App;
