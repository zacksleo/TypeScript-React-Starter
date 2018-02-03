import * as React from 'react';
import './App.css';
import 'normalize.css';
import Header from './components/header/Header';
import Order from './components/order/Order';
import PrivateRoute from './components/route/PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PrivateRoute path="/orders" component={Order}/>
      </div>
    );
  }
}

export default App;
