import React from 'react';




const DisplayWeather = (props) => {
    
    // console.log(props.weatherData);

    //  const { temperature, description, location, region, wind_speed, pressure, img } = props.weatherData;

    //console.log(props.localWeather)

    const { Humidity, type, icon, city } = props.localWeather;
    

    
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
                            
                            className={icon}
                             />
               
                    
                
        </div>


                    <div className=" container2">
                        <div className="weather-info">
                        <h1>{props.temperature} <sup>o</sup> C , {type}</h1>
                   
                       
                        </div>

                        <div className="col-md-3 weather-info">
                    <p><b>Location</b></p>
                    <h2>{city}</h2>
                        </div>


                        <div className="col-md-3 weather-info humid-precip">

                            <div className="precip">
                                <p><b>Precipitation</b> <sup className="mil-perc">(mm)</sup></p>
                                <h2>{props.precip}</h2>
                            </div>
                    

                            <div className="humid">
                                <p><b>Humidity</b> <sup className="mil-perc">(%)</sup></p>
                                <h2>{props.humid} {Humidity}</h2>
                            </div>

                        </div>
                            

                        
                    
                </div> 

                   
        </div>

        
        
            
    </div>
        
            
     </>
    )
}

export default DisplayWeather