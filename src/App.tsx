import * as React from 'react';
import './App.css';
import 'normalize.css';
import Header from './components/header/Header';
import Order from './components/order/Order';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Order />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
