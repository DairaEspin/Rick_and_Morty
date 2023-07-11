import './App.css';
import {useState} from 'react'
import axios from 'axios'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/nav';

function App() {
  const [characters, setCharacters] = useState([])


  const onSearch =(id) =>{
   axios .get(`https://rickandmortyapi.com/api/character/${id}`)
.then(({data})=>{
   if(!characters.find((char)=> char.id === data.id)){
      if(data.name){
         setCharacters((oldcharacters)=>[...oldcharacters, data]);
      }
   } else{ 
      window.alert(`Ya seleccionaste este personaje ${id}`);
      }
      console.log("hola", data)
})
     .catch((err)=> window.alert(err));
  };

  const onClose = (id) => {
   setCharacters(characters.filter(char => char.id !== id))
  }

  return(
   <div className='App'>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
   </div>
  );
}

export default App;
