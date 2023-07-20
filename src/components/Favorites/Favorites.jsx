import React from 'react'
import {connect} from 'react-redux'
import Card from '../Card/Card'

export function Favorites({myFavorites}){
    return(
        <div>{
           myFavorites?.map(({id, name, gender, species, image, status, origin})=>(<Card 
                key={id}
                id={id}
                name={name}
                status={status}
                image={image}
                gender={gender}
                species={species}
                origin={origin} 
            />))
            } </div>

    )
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)