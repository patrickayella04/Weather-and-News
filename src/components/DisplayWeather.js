import React from 'react';
// import Rain from './rain';


const DisplayWeather = (props) => {
    // console.log(props.weatherData);

    // const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img } = props.weatherData;

    //console.log(props.localWeather)

    const {type,icon, temp, windSpeed,Humidity, country, city} =props.localWeather
    console.log(icon)
    
    return (
        <>
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{temp}<sup>o</sup>C , {type}</h1>
                    {/* <h4>{id}</h4> */}
                    <p>{city}  {country}</p>
                </div> 

                    <div className="col-md-9">
                        {/* <Rain  /> */}
                    
                        <img src={icon}
            
                alt="loading..."
                style={{ width: '100px', height: '100px' }}
                className="mainImg"/>
                    
            </div>
        </div>

        <div className="row">
            <div className="col-md-3 weather-info">
                <p><b>Wind Speed</b>(km/hr)</p>
                <h2>{windSpeed}</h2>
            </div>

            {/* <div className="col-md-3 weather-info">
                <p><b>Preassure</b>(millibar)</p>
                <h2>{pressure}</h2>
            </div> */}

            {/* <div className="col-md-3 weather-info">
                <p><b>Precipitation</b>(mm)</p>
                <h2>{precip}</h2>
            </div> */}

            <div className="col-md-3 weather-info">
                <p><b>Humidity</b>(%)</p>
                <h2>{Humidity}</h2>
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