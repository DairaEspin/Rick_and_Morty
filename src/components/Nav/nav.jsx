import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

function Nav({onSearch}){
    return (
        <div>
            <Link to='/'><button> LANDING </button></Link>
            <Link to='/home'><button> HOME </button></Link>
            <Link to='/about'><button> ABOUT </button></Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav