import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers : 0
    }
  }
  increment = () =>{
      this.setState({numbers : this.state.numbers +=1})
  }
  decrement = () =>{
      this.setState({numbers: this.state.numbers -= 1})
  }
  nutrall = () =>{
      this.setState({numbers: 0})
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className='col-md-5' style={{ marginTop: "250px", border: "5px solid black" }}>
          <h1>React Counter</h1>
          <h1>{this.state.numbers}</h1>
          <button className="btn btn-success" onClick ={this.increment}>Increement</button>
          <button className="btn btn-danger" onClick ={this.decrement}>Decrement</button>
          <button className="btn btn-primary" onClick ={this.nutrall}>Nutrall</button>
        </div>
      </div>
    );
  }
}

export default Main;
