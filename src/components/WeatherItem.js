import React, { Component } from "react";
import { render } from "react-dom";
import FakeWeather from  '../fakeWeatherData.json';
import storm from "../img/weather-icons/storm.svg";
import "../components/WeatherItem.css";

export default class WeatherItem extends Component {
  render() {
    return <ul className="wea-ther">
            
    <li>
      <div className="res-grid"><h3>21:00</h3>
         <img src={storm} />
         <h3>
         
         <span>&#8451;</span></h3></div>
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
         <h3>{this.props.city}<span>&#8451;</span></h3></div>
    </li>
   
  
  </ul>
  }
}


export class SayHello extends Component {
  render() {
    return (
      <div style={{ color: this.props.color }}>
         {this.props.city}
      </div>
      
    );
  }
}
