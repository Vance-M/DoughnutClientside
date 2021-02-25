import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <>
            <h1>Doughnut Shoppe</h1>
            <div className= 'Navigation'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/doughnuts'>List of Doughnuts</NavLink>
                <NavLink exact to='/create'>Make a new doughnut.</NavLink>
            </div>
            </>
        )
    }
}
