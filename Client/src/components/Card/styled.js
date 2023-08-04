import styled from 'styled-components'

export const Button = styled.button`
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
`;

export const ButtonCont = styled.div`
display: flex;
width: 75%;
margin-top: 0.5rem;
justify-content: space-around;
`;

export const CardConteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: transparent;
width: 400px;
height: 600px;
padding: 0.2rem;
border-radius: 10px;
border: 1px solid white;
backdrop-filter: blur(5px);
margin: 1rem;
box-shadow: 13px 14px 80px 12px rgba(0,0,0,0.75);
-webkit-box-shadow: 13px 14px 80px 12px rgba(0,0,0,0.75);
`;

export const Title = styled.h2`
// --text-color: green;
font-weight: 800;
color: green;
display: flex;
margin-top: 1rem;
margin-left: 44px;
`;

export const Label = styled.h2`
font-family: sans-serif;
font-size: 0.8 rem;
font-weight: 100px;
color: white;
`;

export const Image = styled.img`
max-width: 75%;
height: 30%;
margin-top: 1rem;
border-radius: 20px;
`;