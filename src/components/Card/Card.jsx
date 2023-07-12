import {Button, CardConteiner, Title, ButtonCont, Image, Label} from './styled.js'
import {Link} from 'react-router-dom'

export default function Card({name, status, species, gender, origin, image, onClose, onFavorites, id}) {

   return (
      <CardConteiner>
         <ButtonCont>
         <Button onClick={onFavorites}> 💜 </Button>
         <Button clone onClick={() => onClose(id)}> ❌ </Button>
         </ButtonCont>
         <Link to={`/detail/${name}`}><Title>{name}</Title></Link>
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
