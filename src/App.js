import React, { Component } from "react";
import storm from "../src/img/weather-icons/storm.svg"; 
import clear from "../src/img/weather-icons/clear.svg"; 

import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Riham - Chris - Mahmoud"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
       {/* ---------Header-------------- */} 
       
       <header className="app_header">
         <nav>
           <input type="text"  placeholder="Type in a city name"></input>
           <button type="submit">FIND WEATHER</button>
         </nav>
       </header>

       {/* ---------Main-------------- */} 

       <main>
         
        <div className="app__main">
          <div class="imagee"> <img src={clear}  /> </div>
          <h2>Temperature 12<span>&#176;</span> to 13<span>&#8451;</span></h2>
          <p><span style={{fontWeight:"bold" , marginRight:"1rem"}}>Humidty</span> 78%  <span style = {{fontWeight:"bold" , margin:"0 1rem"}}>Pressure</span> 1000.8</p>
        </div>

        {/* -----------Ul------------ */} 
        <div  >
          <ul className="wea-ther">
            
            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src={storm} />
                 <h3>12<span>&#8451;</span></h3></div>
             </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src={storm} />
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>12<span>&#8451;</span></h3></div>
            </li>
           
          
          </ul>
        </div>
       </main>
        
      </div>
    );
  }
}

export default App;