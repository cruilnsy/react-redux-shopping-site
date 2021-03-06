import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

class HomeHeader extends Component {
    render() {
        return (
            <div className="homeHeader">
                <header className="homeHeader__wrapper">
                    <a className="homeHeader__city" href="blank">北京</a>
                    <Link to="/search" className="homeHeader__search">输入商户、地点</Link>
                    <Link to="/user" className="homeHeader__self">
                        <div className="homeHeader__portrait"></div>
                    </Link>
                </header>
            </div>
        );
    }
}

export default HomeHeader