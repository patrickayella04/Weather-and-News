import React from 'react';


const Navbar = (props) => {
    

    console.log(props.clearInput);
    console.log(props.clearInput);

    const turnOff = props.clearInput;
    console.log(turnOff)

    


    return (
        <div className="row">
            <div className="col-md 6 nav-container1">
                <div className="title">Weather-app</div>
            </div>

            { turnOff  ? 
            
            
            <div className="col-md 6 nav-container2" onSubmit={(e) => props.changeWeather(e)}>
            <form action="" className="region">
                <input className="regioninput" placeholder="Enter Location"  onChange={(e) => props.changeRegion(e.target.value)} /> 
            </form>
        </div>
            
            :
             
                <div className="region">
                
                    <button className="regioninput" onClick={props.removeInput}>New Search</button>
        </div> 

             
        }
            
            
            
            
            
        </div>
    )
}

export default Navbar