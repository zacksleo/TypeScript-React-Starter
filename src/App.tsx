import * as React from 'react';
import './App.css';
import 'normalize.css';
import Header from './components/header';
import Order from './components/order';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/orders" component={Order}/>
      </div>
    );
  }
}

export default App;
