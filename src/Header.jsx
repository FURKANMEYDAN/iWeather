import React from "react";
import { ReactDOM } from "react";
import './Header.css'



export default function Header(){



    return(
        <div className="header--container">
            <header className="header">
                <img className="header--logo"src="/Logo.png" />
                <div className="baslik">
                     <h3>Welcome to <span className="typeweather">TypeWeather</span></h3>
                </div>
                <h4 className="alt--baslik"> Choose a location to see the weather forecast</h4>
            </header>
            
        </div>
    )
}