export default function SearchBar({onSearch}) {

const handleSearch = () => {
const inputSearch = document.getElementById('inputSearch')
onSearch (inputSearch.value)
inputSearch.value = ""
}


   return (
      <div>
          <input id='inputSearch' type='search' placeHolder="Search character" />
         <button onClick={()=>{handleSearch()}}>Agregar</button> 
      </div>
   );
}
