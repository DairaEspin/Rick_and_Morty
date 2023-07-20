import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;`

export const CardConteiner = styled.div`
displya: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background: transparent;
width: fit-content;
height: fit-content;
padding: 0.2rem;
border-radius: 10px;
border: 2px solid green;
backdrop-filter: blur(5px);
margin: 1rem;
box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 13px 14px 80px 12px rgba(0,0,0,0.75);
`;

export const Title = styled.h2`
font-weight: 700;
color: white;
margin-bottom: 0.5rem;
`;

export const Label = styled.h4`
font-weight: 400;
color: white;
margin: 0px;
`;

export const Image = styled.img`
max-widht: 75%;
height: 30%;
margin-top: 0.5rem;
border-radius: 10px;
`;