import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'

function Detail (){

const {id} = useParams()

const[characterDetail, setCharacterDetail] = useState({})

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
        if (data.name) {
            setCharacterDetail(data);
        } else {
            window.alert('No existe ese ID');
        }
        });

    return setCharacterDetail({});
}, [id]);

return (
    <div>
        {characterDetail ? (
            <div>
                <h2 style={{color: "white"}}> Nombre: {characterDetail.name} </h2>
                <h4>{characterDetail.status}</h4>
                <h4>{characterDetail.species}</h4>
                <h4>{characterDetail.gender}</h4>
                <h4>{characterDetail.origin?.name}</h4>
                <img scr={characterDetail.image} alt=""/>
          </div>
        ) : <h3> Loading... </h3>}
        </div>
        )
        }
        
        
        export default Detail;
