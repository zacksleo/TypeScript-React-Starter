import { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as logo from './logo.png';

class Header extends Component {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <header>
                <div id="logo">
                    <img src={logo}/>
                </div>
                <div className="pull-right">
                    <Link to="/orders">订单列表</Link>|<span>客服</span>
                </div>
            </header>
        );
    }
}

export default Header;