import React from 'react';
import styled from "styled-components";

const StyledCard = styled.div`
padding: 30px;
  background-color: #f8f5f2;
  border-radius: 10px;
  box-shadow: 0 2px 2px  rgba(0,0,0,0.1);
  box-sizing: border-box;
  width: 180px;
  display: inline-block;
  height: 200px;
 border: .5px solid #eee;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    transform: scale(1.1);
  }
`;
const StyledCardContainer = styled.div`

`;
const Image = styled.img`
display: block;
  background-size: contain;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const CardTitle = styled.h4`
font-size: 1rem;
  color: #222525;
  margin: 0;
  line-height: 50px;
 font-weight: 500;
  text-align: center;
`;
const Card = (props) => {
    return (
        <StyledCardContainer>
            <StyledCard>
                <Image src={props.src} alt={props.alt}/>
            </StyledCard>

            <CardTitle>{props.title}</CardTitle>
        </StyledCardContainer>
    );
};

export default Card;
