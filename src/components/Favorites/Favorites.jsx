import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { orderFav, filterFav } from '../Redux/actions'
import Card from '../Card/Card'
import style from './Favorites.module.css'


function Favorites(){
    const [aux, setAux] = React.useState(false)
    const optionsGender = ["All", "Female", "Genderless", "Male", "Unknow"]
    const dispatch = useDispatch()
    const myFavorites = useSelector(state => state.myFavorites)

    const handlerFilter = (event) => {
        dispatch(filterFav(event.target.value))
    }

    const handlerOrder = (event) => {
        dispatch(orderFav(event.target.value))
        setAux(!aux)
    }


    return(
        <div>
            <select onChange={handlerOrder}> 
            <option value="Ascendente"> ASCENDENTE</option>
            <option value="Descendente"> DESCENDENTE </option>
         </select>
        
        <select onChange = {handlerFilter}>
            {optionsGender.map (option =>
                <option key={option} value={option}> {option} </option>
                )}
        </select>


        <div className={style.cardConteiner}>{
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
            </div>
    )
}

// export function mapStateToProps(state){
//     return{
//         myFavorites: state.myFavorites,
//     }
// }

// export default connect(mapStateToProps)(Favorites);

export default Favorites