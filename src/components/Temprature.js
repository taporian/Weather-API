import React, { Component } from "react";
import clear from "../img/weather-icons/clear.svg";
import FakeWeather from  '../fakeWeatherData.json';
import "../components/Temprature.css"
export default class  Temprature extends Component {
    state = {
      input: "chris"
    };
    render(){
        return (     
        <div className="app__main">    
        <div className="imagee"> <img src={this.props.weatherIcons(this.props.id)} /></div>
        <h2>Temperature  <span>&#176;</span> {this.props.tempMin} to {this.props.tempMax}<span>&#8451;</span></h2>
        <p><span style={{fontWeight:"bold" , marginRight:"1rem"}}>Humidity</span> {this.props.humidity}  <span style = {{fontWeight:"bold" , margin:"0 1rem"}}>Pressure</span> {this.props.pressure}</p>
      </div>
        );
    }
}


        