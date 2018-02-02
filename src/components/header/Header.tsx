import { Component } from 'react';
import * as React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import * as logo from './logo.png';

class Header extends Component {

    constructor(props: string) {
        super(props);
    }

    public render() {
        return (
            <Router>
                <header>
                    <div id="logo">
                        <img src={logo}/>
                    </div>
                    <div className="pull-right">
                        <Link to="/orders">订单</Link>|<span>客服</span>
                    </div>
                </header>
            </Router>
        );
    }
}

export default Header;