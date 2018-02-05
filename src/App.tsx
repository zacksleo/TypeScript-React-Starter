import * as React from 'react';
import './App.css';
import 'normalize.css';
import Header from './components/header';
import Order from './components/order';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route path="/orders" component={Order}/>
                </div>
            </Router>
        );
    }
}

export default App;
