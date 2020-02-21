import React, {Component} from 'react';
import FoodTablePage from './components/FoodTablePage/FoodTablePage';
// import FoodCard from './components/FoodCard/FoodCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodClicked: false,
      foodArray: []
    };
  }

  render () {
    return (
    <div className="App">
      <h1>Welcome to LooneyHealth!</h1>
      <FoodTablePage />
      {/* <FoodCard /> */}

    </div>
    );
  }
}

export default App;
