import React from 'react';
import SearchIcon from "../Icons/Search";

import styled from "styled-components";

const StyledTopBar = styled.main`
//padding:10px ;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  background-color:#fffffe;
padding: 0 0.8em;
 box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  border: .5px solid #eee;
`;
const Input = styled.input`
  padding:0.5em 0;
  color: ${props => props.inputColor || "palevioletred"};
  background-color: transparent;
  border: none;
  height: 100%;
  outline: none;
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  width: 100%;
`;
const Heading = styled.h1`
  margin: 0;
  color: #545454;
  font-weight: 500;
`;
const Avatar = styled.div`
width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3px solid rgba(80, 35, 127, 0.8);
  overflow: hidden;
`;
const Image = styled.img`
 display: block;
  width: 100%;
  height: 100%;
`;
const LeftSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`;
const TopBar = (props) => {
    return (
        <StyledTopBar>
           <LeftSection>
               <Heading>{props.heading}</Heading>
               <InputWrapper>
                   <Input placeholder="Find the book"/>
                   <SearchIcon/>
               </InputWrapper>
           </LeftSection>
            <Avatar>
                <Image src={"https://i.pravatar.cc/100"}/>
            </Avatar>
        </StyledTopBar>
    );
};

export default TopBar;
