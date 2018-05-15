import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Link to="/"><h1>X</h1></Link>
            </div>
        );
    }
}

export default Header;
