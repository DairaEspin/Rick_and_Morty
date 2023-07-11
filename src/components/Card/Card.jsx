import {Button, CardConteiner, Title, ButtonCont, Image, Label} from './styled.js'
import style from "./card.module.css"

export default function Card({name, status, species, gender, origin, image, onClose, onFavorites, id}) {

   return (
      <CardConteiner>
         <ButtonCont>
         <button onClick={onFavorites}> 💜 </button>
         <button clone onClick={() => onClose(id)}> ❌ </button>
         </ButtonCont>
         <img className={style.imgcard} src={image} alt={`No se encuentra la imagen de ${name}`}/>
         <Title>{name}</Title>
         <Label>Name: {name} </Label>
         <Label>Status: {status} </Label>
         <Label>Species: {species} </Label>
         <Label>Gender: {gender} </Label>
         <Label>Origin: {origin} </Label>
         
      </CardConteiner>
   );
}
