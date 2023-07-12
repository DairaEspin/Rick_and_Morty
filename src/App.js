import style from './App.module.css';
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import axios from 'axios'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/nav';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/about';
import Error404 from './components/Error/Error404.jsx';

function App() {
  const [characters, setCharacters] = useState([])


  const onSearch =(id) =>{
   axios(`https://rickandmortyapi.com/api/character/${id}`)
.then(({data})=>{
   if(!characters.find((char)=> char.id === data.id)){
      if(data.name){
         setCharacters((oldcharacters)=>[...oldcharacters, data]);
      }
   } else{ 
      window.alert(`Ya seleccionaste este personaje ${id}`);
      }
})
     .catch((err)=> window.alert(err));
  };

  const onClose = (id) => {
   setCharacters(characters.filter(char => char.id !== id))
  }

  return(
   <div className={style.app}>
      <Nav onSearch={onSearch} />
      <Routes>
         <Route
         path='/home'
         element={<Cards characters={characters}onClose={onClose}/>}/>
         <Route
         path='/about'
         element={<About/>}/>
         <Route
         path='/detail/:id'
         element={<Detail/>}
         />
         <Route 
         path='*'
         element={<Error404/>}
         />
      </Routes>
   </div>
  );
}

export default App;
