//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counters from "./components/counters";
import NavBar from './components/navbar';

class App extends Component {

  state = {
    counters: [
        {id: 1, value: 2},
        {id: 2, value: 1},
        {id: 3, value: 7},
        {id: 4, value: 0}
    ]
}



handleIncrement = counter => {
   const counters = [...this.state.counters]; 
   const index = counters.indexOf(counter);
   counters[index].value ++;
   this.setState({counters});
};

handleDecrement = counter => {
  const counters = [...this.state.counters]; 
  const index = counters.indexOf(counter);
  if (counters[index].value > 0) {
    counters[index].value --;
  }
  this.setState({counters});
};

handleDelete = (id) => {
    const counters = this.state.counters.filter(obj => obj.id !== id);
    this.setState({counters});
};

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
};

  render() {

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
        <Counters counters={this.state.counters} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onReset={this.handleReset}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
