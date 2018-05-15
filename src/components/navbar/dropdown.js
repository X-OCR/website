import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavBarItem from './navbaritem';

import './navbar.scss';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }
    }

    toggleDropdown() {
        this.setState({toggled: !this.state.toggled});
    }

    showDropDown() {
        //if (this.state.toggled) {
        if (true) {
            return ( <div> { this.props.children } </div> );
        } else {
            return;
        }
    }

    render() {
        return (
            <div className="Dropdown" onClick={ this.toggleDropdown.bind(this) } >
                { this.props.title }
                { this.showDropDown() }
            </div>
        );
    }
}

export default Dropdown;
