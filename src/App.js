import React from 'react';
import './App.css';
import Lottery from './Lottery';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Lottery />
        <Lottery title='Mini Daily' numBalls={4} maxNum={10} />
      </div>
    );
  }
}

export default App;
