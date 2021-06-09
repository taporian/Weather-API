
import React, { Component } from "react";
import Search from "../src/components/Search";
import sayHi, {SayHello} from "./components/WeatherItem"
import Temprature from "./components/Temprature"
import "./App.css";
import WeatherItem from "../src/components/WeatherItem";
import storm from "./img/weather-icons/storm.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import fog from "./img/weather-icons/fog.svg";
import clear from "./img/weather-icons/clear.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import unknown from "./img/weather-icons/unknown.svg";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      city: "",
      data: [],
      temp2: [],
      tempMax: null,
      tempMin: null,
      id:null,
      weather : null,
      pressure: null,
      humidity:null

    };
    
  }
  handleInput = value => {

    
     fetch('http://api.openweathermap.org/data/2.5/forecast?q='+value+'&cnt=8&units=metric&appid=1c8fd00f3175ad6533e188b48cfd370f')
    .then(res => { if(!res.ok){
      throw Error ('Could not fetch');
    }
      return res.json()} )   
    .then(json => this.setState({temp2 :json.list,
                                tempMin :json.list[0].main.temp,
                                tempMax :json.list[7].main.temp,
                                pressure: json.list[0].main.pressure,
                                humidity:json.list[0].main.humidity,
                                id: json.list[0].weather[0].id,
                                
                              },
                              console.log(json.list[0].weather[0].id)
        )).catch(err =>{
          console.log(err.message);
        })
}
weatherIcons=(id) =>{
  switch(true) {
  case (id<300):
     return storm
      break;
  case (id>= 300 && id <= 499):
      return drizzle
      break;
  case (id>= 500 && id <= 599):
        return rain
        break;
        case (id>= 600 && id <= 699):
          return snow
          break;

    case (id>= 700 && id <= 799):
      return fog
      break;
      
    case (id==800):
      return clear
      break;
    
    case (id==801):
      return partlycloudy
      break;
    
      case (id>= 801 && id <= 805):
        return mostlycloudy
        break;

    default:
      return unknown;

}
};
   render() {
    return (
      <div className="app">   
       {/* ---------Header-------------- */}  
       <header className="app_header">    
         <nav>      
           <Search  handleInput={this.handleInput}/>
           <SayHello color="black" city={this.state.city} />
     
         </nav>
       </header>
       <Temprature weatherIcons = {this.weatherIcons}
                    id = {this.state.id}
                    pressure ={this.state.pressure}
                    humidity={this.state.humidity}
                  tempMax={this.state.tempMax}
                  tempMin={this.state.tempMin}
                        />
       <WeatherItem weatherIcons = {this.weatherIcons}
                    temp2={this.state.temp2}
                    id = {this.state.id}/>
       {/* ---------Main-------------- */} 
       <main>
        {/* -----------Ul------------ */} 
        <div  >     
        </div>
       </main>     
      </div>
    );
  }
}

export default App;





