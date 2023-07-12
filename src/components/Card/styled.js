import styled from 'styled-components'

export const Button = styled.button `
display: inline-block;
background-color: ${props => props.close ? 'black' : 'white'};
border-radius: 5px;
width: fit-content;
high: fit-content;
filter: brightness(0.8);
margin: 1rem;
cursor: pointer;

&:hover{
    filter: brightness(1.5);
    transform: scale(1.2);
}
`

export const ButtonCont = styled.div `
display: flex;
justify-content: space-around;
`

export const CardConteiner = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
background: transparent;
widht: 300px;
padding: 1.5rem;
border-radius: 10px;
border: 1px solid white;
backdrop-filter: blur(5px);
margin: 0.5rem;
box-shadow: 13px 14px 80px 12px rgba(0,0,0,0.75);
-webkit-box-shadow: 13px 14px 80px 12px rgba(0,0,0,0.75);
`

export const Title = styled.h2 `
// --text-color: violet;
font-weight: 800;
color: #3f3f77;
display: flex;
margin-top: 1rem;
margin-left: 44px;
`

export const Label = styled.h2 `
font-family: sans-serif;
font-size: 0.8 rem;
font-weight: 400;
color: white;
`

export const Image = styled.img `
width: 335px;
height: 332px;
margin-top: -6rem;
border-radius: 20px;
margin-left: 429px;
`