import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import ShoppingTwo from '../images/shopping-2.jpg';
import {sliderItems} from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '1rem'};
    right: ${props=> props.direction === 'right' && '1rem'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw)
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:  center;
    background-color: #${props=> props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 5rem;
`;

const Title = styled.h1`
    font-size: 7rem;
`;

const Desc = styled.p`
    margin: 5rem 0rem;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 1rem;
    font-size: 2rem;
    background-color: transparent;
    cursor: pointer;
`;



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }
    return ( 
        <Container>
            <Arrow direction='left' onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                        <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
     );
}
 
export default Slider;