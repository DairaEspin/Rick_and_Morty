import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {Title, CardConteiner, Image, Label, Container} from './styledDetail.js'

function Detail (){

const {id} = useParams()

const[characterDetail, setCharacterDetail] = useState({})

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
    <Container>
        {characterDetail ? (
            <CardConteiner>
                <Title style={{color: "white"}}> Nombre: {characterDetail.name} </Title>
                <Image scr={characterDetail.image} alt=""/>
                <Label>{characterDetail.status}</Label>
                <Label>{characterDetail.species}</Label>
                <Label>{characterDetail.gender}</Label>
                <Label>{characterDetail.origin?.name}</Label>
          </CardConteiner>
        ) : <h3> Loading... </h3>}
        </Container>
        )
        }
        
        
        export default Detail;
