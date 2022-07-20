import React from 'react';
import styled from "styled-components";
import TopBar from "../../common/TopBar/TopBar";
import Card from "../../common/Card/Card";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};

const Container = styled.main`
padding: 40px 50px;
  background-color:#fffffe;
  height: auto;
`;
const Main = styled.section`

`;
const List = styled.div`
padding-top: 50px;
`;
const Heading = styled.h3`
margin: 0;
  font-size: 22px;
  font-weight: 500;
  color: #707070;
`;

const Items = styled.div`
display:flex;
  align-items: center;
  gap: 10px;
  
`;
const Explore = () => {
    return (
        <Container>
            <TopBar heading="Explore"/>
            <Main>
                <List>
                    <Heading>Popular</Heading>
                    <Slider {...config} >
                        {
                            [1,2,3,4,5,6].map((item,i)=>{
                                return(
                                    <Card key={i} title={"Hello"} src={"https://picsum.photos/200"} alt={"randome"}/>
                                )
                            })
                        }
                    </Slider>
                </List>

                <List>
                    <Heading>Exclusive</Heading>
                    <Slider {...config} >
                        {
                            [1,2,3,4,5,6].map((item,i)=>{
                                return(
                                    <Card key={i} title={"Hello"} src={"https://picsum.photos/200"} alt={"randome"}/>
                                )
                            })
                        }
                    </Slider>
                </List>

            </Main>
        </Container>
    );
};

export default Explore;
