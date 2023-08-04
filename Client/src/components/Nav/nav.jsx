import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {BiHomeSmile} from "react-icons/bi"
import {Button, ButtonCont} from './styledNav'
import SearchBar from '../SearchBar/SearchBar'

function Nav({onSearch}){
    return (
        <div>
            <ButtonCont>
            <Link to='/'><Button> LOGIN </Button></Link>
            <Link to='/home'><Button> HOME </Button></Link>
            <Link to='/about'><Button> ABOUT </Button></Link>
            <Link to='/favorites'><Button> FAVORITES </Button></Link>
            <SearchBar onSearch={onSearch}/>
            </ButtonCont>
        </div>
    )
}

export default Nav