import React from 'react';
import Rain from './rain';



const DisplayWeather = (props) => {
    
    // console.log(props.weatherData);

    // const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img } = props.weatherData;

    //console.log(props.localWeather)

    const { type, icon, country, city } = props.localWeather;
    
    //const temp = props.temperature
    //const { hello } = props.greeting
    
    console.log(type)

    return (
        <>
            <div className="user-weather">
                



                <div className="main-container">
                    


                <div className=" container1">
                        
                        
                        <div  src={require('../components/pexels-brett-sayles-912364.jpg')}
        
                            alt="loading..."
                            style={{ width: '40vw', height: '30vw'}}
                            className={icon}
                             />
               
                    
                
        </div>


                    <div className=" container2">
                        <div className="weather-info">
                        <h1>{props.temperature}<sup>o</sup>C , {type}</h1>
                    {/* <h4>{id}</h4> */}
                        <p>{city}  {country} </p>
                        </div>
                    
                </div> 

                   
        </div>

        
        
            
    </div>
        
            



    {/* <div className="user-weather">
                <div className="row">
                    
            
        </div>
    </div> */}
     </>
    )
}

export default DisplayWeather