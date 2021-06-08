
import React, { Component } from "react";


 
 
import Search from "../src/components/Search";
import Weather from "../src/components/WeatherItem"
import sayHi, {SayHello} from "./components/WeatherItem"
import Temprature from "./components/Temprature"

import FakeWeather from  './fakeWeatherData.json';



import "./App.css";
import WeatherItem from "../src/components/WeatherItem";



// const checkforwheather=()=>{
//   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=1c8fd00f3175ad6533e188b48cfd370f`)
//             .then(respone => { 
//                 return respone.json();
//                 })
//                 .then(data => {
//                   console.log(data)
//                 })
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      data: [],
      temp2: [],
      tempMax: null,
      tempMin: null

    };
  }
  

  handleInput = value => {
   // this.setState({ city: value });
    
     fetch('http://api.openweathermap.org/data/2.5/forecast?q='+value+'&cnt=8&units=metric&appid=1c8fd00f3175ad6533e188b48cfd370f')
    .then(res => res.json())
    
    .then(json => this.setState({temp2 :json.list,
                                tempMin :json.list[0].main.temp,
                                tempMax :json.list[7].main.temp},
                
        ))
 
    // .then(json => this.setState({temp2 :json.list[7].main.temp}));
};
  // handleInputchange = value2 =>{
  //   this.setState({ city2: value2});
  

   
  // };
  
  // componentDidMount() {
  //   fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=1c8fd00f3175ad6533e188b48cfd370f')
  //     .then(res => res.json())
  //     .then(json => console.log(json));
  // }

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
       <Temprature tempMax={this.state.tempMax}
                  tempMin={this.state.tempMin}
                        />
       <WeatherItem temp2={this.state.temp2}/>
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