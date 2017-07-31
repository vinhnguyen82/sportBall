import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let data = {dallas:"Cowboys", denver:"Broncos"}
let output = 'Go ahead'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      city: "dallas",
      sports_team: "",
      output :'Go ahead, type in a city'
    }
    this._onChange = this._onChange.bind(this)
  }
  _onChange(event){
    console.log(event.target.value)
    let input = event.target.value
    let sth = data[input] ? data[input] : input + "never heard of it"
    this.setState({
      city: input,
      output : sth
    })
  }
  get sports_team(){
    return this.state.sports_team
  }
  render() {
    return (
      <div className="App">
        <form onChange={this._onChange}>
          <label htmlFor="city">What's your city?</label>
          <input id ="city" type="text" value={this.state.city} name="city"></input>
        </form>
        <div>
         {Sports(this.state.city)}
        </div>
      </div>
    );
  }

}
const Sports = (city) => <h1>{data[city] ? data[city] : city + "never heard of it"}</h1>
//const Sports = (city) => <h1>{output}</h1>
export default App;
//go ahead type in a city