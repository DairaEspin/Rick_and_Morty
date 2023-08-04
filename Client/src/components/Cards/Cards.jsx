import Card from '../Card/Card.jsx';
import style from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
   <div className={style.cardsConteiner}>
      {characters.map(character => 
            <Card
            key= {character.id}
            id={character.id}
            name= {character.name}
            status= {character.status}
            species= {character.species}
            gender= {character.gender}
            origin= {character.origin.name}
            image= {character.image}
            onClose={onClose}
            onFavorites={() => window.alert('Emulamos que tenemos un favorito')}
            />
            )}
   </div>
   );
}
