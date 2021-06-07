import React, { Component } from "react";
import { render } from "react-dom";

export default class WeatherItem extends Component {
  render() {
    return <div> </div>;
  }
}


export class SayHello extends Component {
  render() {
    return (
      <div style={{ color: this.props.color }}>
         {this.props.name}
      </div>
    );
  }
}
