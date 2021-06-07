
import React, { Component } from "react";


 
 
import Search from "../src/components/Search";
import Weather from "../src/components/WeatherItem"
import sayHi, {SayHello} from "./components/WeatherItem"
import Temprature from "./components/Temprature"

import FakeWeather from  './fakeWeatherData.json';



import "./App.css";



const checkforwheather=()=>{
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=1c8fd00f3175ad6533e188b48cfd370f")
            .then(respone => { 
                return respone.json();
                })
                .then(data => {
                  console.log(data)
                })
};

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
    
         </nav>
       </header>
       <Temprature />
       <Weather />
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