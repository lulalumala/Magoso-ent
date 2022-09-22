import styled from "styled-components"
import { slides } from "../data"
import {useState} from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NavigationArrow = styled.div`
cursor: pointer;
background:lightgray;
border-radius:50%;
width:40px;
height:40px; 
display: flex;
justify-content: center;
align-items:center;
position:absolute;
top: 50%; left: ${props => props.direction === "left" ? 1 : 96}%;
transform: translateY(-50%);
z-index:200 ;`
const SliderContainer = styled.div`display: flex; 
overflow: hidden;`
const SliderItem = styled.div`width:100vw; height:70vh; position:relative;flex:1;
transition: all 2s ease-in;`
const ImageContainer = styled.div`width:100vw   ; height:100%;`
const Image = styled.img`width:100%; height:100%; object-fit:cover;object-position: left 50% top 40%;`
const SliderInfo = styled.div`
position:absolute; 
top:0;   left:0; 
width: 100%;
height: 100%;
z-index:100;
color: white; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: rgba(0,0,0,.5);

font-size: 3rem;`
const SliderHeading = styled.h2`text-transform: capitalize; text-align:center;`
const SliderDescription = styled.p``
const Button = styled.button`padding: 1em 2em; background: orange; border: none; box-shadow: 0,0,3px gray;
border-radius: 5px; cursor: pointer; font-size: 1rem;`

const Slider = () => {
    
    const [activeIndex, setActiveIndex]=useState(0)
    const handleSlide = (side) => {
        if (side === "left") {
            setActiveIndex(activeIndex>0?activeIndex -1:5)
        }
        else {
        setActiveIndex(activeIndex<5?activeIndex+1:0)    
        }
    //  alert(`You have successfully clicked the ${side} arrow`)
    }

    return (
        <SliderContainer>
            {
                slides.map((slide, index) => {

                    return (
                        <SliderItem key={index} style={{transform:`translateX(${activeIndex*-100}vw)`}}>
                            <NavigationArrow direction="left" onClick={ ()=>handleSlide ("left")}>
                                <NavigateBeforeIcon />
                            </NavigationArrow>
                            <NavigationArrow direction="right"  onClick={ ()=>handleSlide ("right")}>
                                <NavigateNextIcon />
                            </NavigationArrow>
                            <ImageContainer>
                                <Image src={slide.img} />
                            </ImageContainer>
                            <SliderInfo>
                                <SliderHeading>{slide.name}</SliderHeading>
                                <SliderDescription>{slide.desc}</SliderDescription>
                                <Button>shop {slide.name}</Button>
                            </SliderInfo>
                        </SliderItem>)
                })
            }

        </SliderContainer>
    )
}

export default Slider