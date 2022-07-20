import React from 'react';

import DesktopNav from "./DesktopNav";

import styled from "styled-components"
import ArrowRight from "../Icons/ArrowRight";
import {NavLink} from "react-router-dom";

const NavItems = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  border-radius: 8px;
  transition: 0.3s;
  color: #222525;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  &:hover {
    color: #551A8B;
    background-color: rgba(80, 35, 127, 0.1);
    transform: translateX(20px);
   
  }

  &.active {
    color: #551A8B;
    font-weight: 700;
  }


`;



const Sidebar = () => {
    const navItem = [{path:{name:"Explore",location:"/"}},{path:{name:"Categories",location:"/categories"}}
        ,{path:{name:"My Lib",location:"/mylib"}}];

    return (
        <>
            <DesktopNav>
                {navItem.map( (item,index) =>{
                    return(
                        <NavItems key={index} to={item.path.location}>
                            {item.path.name}
                            <ArrowRight/>
                        </NavItems>
                    )
                })}
            </DesktopNav>

        </>
    );
};

export default Sidebar;
