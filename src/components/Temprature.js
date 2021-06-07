import React from "react";
import clear from "../img/weather-icons/clear.svg";
import FakeWeather from  '../fakeWeatherData.json';
import "../components/Temprature.css"

class Temprature extends React.Component {
    state = {
      input: "chris"
    };
    render(){
        return (
        <div className="app__main">
        <div className="imagee"> <img src={clear}  /> </div>
        <h2>Temperature  <span>&#176;</span> to {Math.floor(FakeWeather.list[1].main.temp - 273.15)}<span>&#8451;</span></h2>
        <p><span style={{fontWeight:"bold" , marginRight:"1rem"}}>Humidity</span> 78%  <span style = {{fontWeight:"bold" , margin:"0 1rem"}}>Pressure</span> 1000.8</p>
      </div>
        );
    }
}
export default Temprature;

        