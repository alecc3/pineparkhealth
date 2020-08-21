import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table';
import Board from './components/board';
import Gallery from './components/gallery';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        display: 1,
        arr: [
        {name: "folklore", artist:"Taylor Swift", tag:"New"},
        {name: "High Off Life", artist: "Future", tag: ""},
        {name: "Punisher", artist: "Phoebe Bridgers", tag:"New"},
        {name: "In Rainbows", artist: "Radiohead", tag:""}
      ],
    };
}

handleClick(choice){
  this.setState(state => ({
    display: choice
  }));
}

render(){
  const style = this.state.display;
  let display;
  let check;
  if (style==1){display = <Table albums={this.state.arr}></Table>;}
  else if (style==2){display = <Board albums={this.state.arr}></Board>;}
  else{display = <Gallery></Gallery>;}
  return (

    <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <button class="btn btn-dark" onClick={() => this.handleClick(1)}>Table</button>
        <button class="btn btn-dark" onClick={() => this.handleClick(2)}>Board</button>
        <button class="btn btn-dark" onClick={() => this.handleClick(3)}>Gallery</button>
        {display}
    </div>
  );
}

}

export default App;
