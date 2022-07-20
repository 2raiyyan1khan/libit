import React from "react";
import Sidebar from "../../Components/common/Sidebar";
import styled from "styled-components";


const Container = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
`;
const MainContainer = styled.main`
position: relative;
  left: 25%;
width: 75%;
  overflow-x: hidden;
`;
const SidebarContainer = styled.div`
  top: 0;
  bottom: 0;
position: fixed;
width: 25%;
  height: auto;

  overflow-y: auto;
`;

const Layout = ({children})=>{

    return(
        <Container>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>

            <MainContainer>
                    {children}


                {/*<h2>Footer</h2>*/}
            </MainContainer>

        </Container>
    )
}

export default Layout;