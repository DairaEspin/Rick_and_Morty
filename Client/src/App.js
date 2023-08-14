import style from './App.module.css';
import {useEffect, useState} from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/nav';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/about';
import Error404 from './components/Error/Error404.jsx';
import Form  from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

const {pathname} = useLocation()
const navigate = useNavigate()

   const EMAIL = "dairaespin@henry.com";
   const PASSWORD = "Henry2023";

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   
   // function login (userData){
   //    if (userData.password === PASSWORD && userData.email === EMAIL){
   //       setAccess(true);
   //       navigate('./home');
   //    } else {
   //       alert("Email o Password incorrecto")
   //    }
   // }

   useEffect (() =>{
      !access && navigate('/');
   }, [access, navigate]);

  const onSearch =(id) =>{
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
.then(({data})=>{
   if(!characters.find((char)=> char.id === data.id)){
      if(data.name){
         setCharacters((oldCharacters)=>[...oldCharacters, data]);
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
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
         <Route path='/' element={<Form login={login}/>}/>
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
         path='/favorites'
         element={<Favorites/>}
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
