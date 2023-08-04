import { FcAdvance } from "react-icons/fc"
import style from './SearchBar.module.css'
import { useState } from 'react'


export default function SearchBar({onSearch}) {

const[character, setCharacter] = useState('')

const handleChange = (event) => {
   let {value} = event.target
setCharacter(value)
} 

// const handleSearch = (character) =>{
//    onSearch(character)
//    console.log("HolaHandle", character)
// }

   return (
      <>
      <div>
          <input className={style.input} onChange={handleChange} value={character} id='inputSearch' type='search' placeholder="Search" />
         <button onClick={()=> onSearch(character) }><FcAdvance/></button>
      </div>
      </>
   );
}


