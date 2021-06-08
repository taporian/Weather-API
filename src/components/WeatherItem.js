/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { render } from "react-dom";
import FakeWeather from  '../fakeWeatherData.json';
import storm from "../img/weather-icons/storm.svg";
import "../components/WeatherItem.css";
import "../App";

export default class WeatherItem extends Component {
  render() {
    return <ul className="wea-ther">
        {this.props.temp2.map(chris =>
    
    <li>
      <div className="res-grid"><h3>{chris.dt_txt}</h3>
         <img src={storm} />
         <h3>{chris.main.temp} <span>&#8451;</span></h3></div>
     </li>
       )}     
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
