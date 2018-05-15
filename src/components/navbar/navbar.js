import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavBarItem from './navbaritem';
import Dropdown from './dropdown';

import './navbar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
               <Dropdown title="Events">
                    <NavLink className="NavBarItem" to="/events/past">Past</NavLink>
                    <NavLink className="NavBarItem" to="/events/toughest2018">Toughest 2018</NavLink>
                    <NavLink className="NavBarItem" to="/events/actionrun2018">Action run 2018</NavLink>
                    <NavLink className="NavBarItem" to="/events/toughviking2019">Tough Viking 2019</NavLink>
                </Dropdown>
                <NavLink className="NavBarItem" to="/team">The team</NavLink>
                <NavLink className="NavBarItem" to="/join">Join us</NavLink>
            </div>
        );
    }
}

export default NavBar;
