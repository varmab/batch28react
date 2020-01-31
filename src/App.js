import React, {Component} from 'react';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Friends from './Friends';
import Todos from './Todos';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Varma" year={2022} password="123456"/>
        </header>
        <Todos/>
      </div>
    );
  }
}

export default App;
