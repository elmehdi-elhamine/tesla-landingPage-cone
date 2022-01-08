import React from 'react'
import styled from 'styled-components'

const Section = ({title,description,leftbuttonText,rightbuttonText, backgroundImg}) => {
    return (
        <Wrapper bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
              
            </ItemText>
            <Buttons>
            <ButtonGroupe>
                <LeftButton>{leftbuttonText}</LeftButton>
                {rightbuttonText &&  <RightButton>{rightbuttonText}</RightButton>}
               
            </ButtonGroupe>
            <i style={{color:'white',animation:"animateDown infinite 1.5s",overflowX:"hidden",}}  class="far fa-angle-double-down fa-2x"></i>
            </Buttons>
           
        </Wrapper>
    )
}
//wrapper component
const Wrapper=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-reapeat;
background-image:${props=>`url("/images/${props.bgImage}")`};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`;
//Item text component

const ItemText=styled.div`
padding-top:15vh;
text-align:center;`;
//Button groupe component
const ButtonGroupe=styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px){
    flex-direction:column;
}
`;
//Left button component
const LeftButton=styled.button`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;

`;
//Right button component
const RightButton=styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;




`;
const DownArrow=styled.image`
marging-top:20px;
height:40px;
`;

const Buttons=styled.div``;

export default Section
