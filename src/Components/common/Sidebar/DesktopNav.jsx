import React from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom";

const Container = styled.div`
  background-color: #f8f5f2;
  
  padding:0 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Logo = styled.h3`
  //padding:20px 30px;
  //margin-bottom: 40px;
  font-size: 38px;
  margin: 0;
  padding-top: 30px;
  padding-bottom: 40px;
  
`;
const DesktopNav = ({children}) => {
    return (
        <Container>
            <Logo><Link to={"/"}>LibIt</Link></Logo>
            {children}
        </Container>
    );
};

export default DesktopNav;
