import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './navbar.scss';

class NavBarItem extends Component {

    onClick() {
        //this.props.history.push(this.props.to);
        console.log('push to ' + this.props.to);5
    }

    render() {
        return (
            <div className="NavBarItem" onClick={this.onClick.bind(this)} >
                {this.props.text}
            </div>
        );
    }
}

NavBarItem.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default NavBarItem;