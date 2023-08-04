import {Button, CardConteiner, Title, ButtonCont, Image, Label} from './styled.js'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {addFav, removeFav} from '../Redux/actions.js'
import {connect} from 'react-redux'

function Card({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] = useState (false)

   useEffect (() => {
myFavorites?.forEach((fav) =>{
   if (fav.id === id){
      setIsFav(true);
   }
});
   }, [myFavorites]);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else{
         setIsFav(true)
         addFav({name, status, species, gender, origin, image, id})
      }
   }
   
   return (
      <CardConteiner>
         <ButtonCont>
            {
               isFav ? (
                  <Button onClick={handleFavorite}> 🤍 </Button>
               ) : (
                  <Button onClick={handleFavorite}> 💚 </Button>
               )
            }
         

         <Button clone onClick={() => onClose(id)}> ❌ </Button>
         </ButtonCont>
         <Link to={`/detail/${id}`}> <Title>{name} | {id} </Title></Link>
         <Image src={image} alt={`No se encuentra la imagen de ${name}`}/>
         <ButtonCont>
         <Title> {name} |</Title>
         <Label>| {name} |</Label>
         <Label>| {status} |</Label>
         <Label>| {species} |</Label>
         <Label>| {gender} |</Label>
         <Label>| {origin} |</Label>
         </ButtonCont>
         
      </CardConteiner>
   );
}

export function mapStateToProps (state){
   return{
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps (dispatch){
   return{
      addFav: function (character){
         dispatch(addFav(character))
      },
      removeFav: function (id){
         dispatch(removeFav(id))
      }
   }
}
export default connect (mapStateToProps, mapDispatchToProps)(Card)