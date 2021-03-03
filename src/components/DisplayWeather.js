import React from 'react';




const DisplayWeather = (props) => {
    
    // console.log(props.weatherData);

     const { temperature, description, location, region, wind_speed, pressure, img } = props.weatherData;

    //console.log(props.localWeather)

    const { Humidity,precip,type, icon, country, city } = props.localWeather;
    
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
                            // style={{ width: '40vw', height: '30vw'}}
                            className={icon}
                             />
               
                    
                
        </div>


                    <div className=" container2">
                        <div className="weather-info">
                        <h1>{props.temperature}<sup>o</sup>C , {type}</h1>
                   
                        <p>{city}  {country} </p>
                        </div>


                        <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{precip}</h2>
                        </div>
                        
                        <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{Humidity}</h2>
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