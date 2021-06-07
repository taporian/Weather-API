import React, { Component } from "react";

import storm from "../src/img/weather-icons/storm.svg"; 
import clear from "../src/img/weather-icons/clear.svg"; 
import Search from "../src/components/Search";
import Weather from "../src/components/WeatherItem"
import sayHi, {SayHello} from "./components/WeatherItem"

import FakeWeather from  './fakeWeatherData.json';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleInput = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
       {/* ---------Header-------------- */} 
       
       <header className="app_header">
         <nav>
           
           <Search  handleInput={this.handleInput}/>
           <SayHello color="black" name={this.state.name} />

           <Weather />
           
           
         </nav>
       </header>

       {/* ---------Main-------------- */} 

       <main>
         
        <div className="app__main">
          <div class="imagee"> <img src={clear}  /> </div>
          <h2>Temperature {Math.floor(FakeWeather.list[0].main.temp - 273.15)}<span>&#176;</span> to {Math.floor(FakeWeather.list[1].main.temp - 273.15)}<span>&#8451;</span></h2>
          <p><span style={{fontWeight:"bold" , marginRight:"1rem"}}>Humidity</span> 78%  <span style = {{fontWeight:"bold" , margin:"0 1rem"}}>Pressure</span> 1000.8</p>
        </div>

        {/* -----------Ul------------ */} 
        <div  >
          <ul className="wea-ther">
            
            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src={storm} />
                 <h3>{Math.floor(FakeWeather.list[2].main.temp - 273.15)}<span>&#8451;</span></h3></div>
             </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src={storm} />
                 <h3>{Math.floor(FakeWeather.list[3].main.temp - 273.15)}<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>{Math.floor(FakeWeather.list[4].main.temp - 273.15)}<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>{Math.floor(FakeWeather.list[5].main.temp - 273.15)}<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>{Math.floor(FakeWeather.list[5].main.temp - 273.15)}<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>{Math.floor(FakeWeather.list[4].main.temp - 273.15)}<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
              <img src={storm} /> 
                 <h3>{Math.floor(FakeWeather.list[3].main.temp - 273.15)}<span>&#8451;</span></h3></div>
            </li>
           
          
          </ul>
        </div>
       </main>
        
      </div>
    );
  }
}

export default App;