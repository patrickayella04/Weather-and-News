import React from 'react';

const Navbar = (props) => {
    return (
        <div className="row">
            <div className="col-md 6">
                <div className="title">Weather-app</div>
            </div>
            <div className="col-md 6" onSubmit={(e) => props.changeWeather(e)}>
                <form action="" className="region">
                    <input className="regioninput" placeholder="Enter Location" onChange={(e) => props.changeRegion(e.target.value)} /> 
                </form>
            </div>
        </div>
    )
}

export default Navbar