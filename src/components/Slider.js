import styled from "styled-components"
import { slides } from "../data"

const SliderContainer = styled.div``
const SliderItem = styled.div`width:100vw; height:70vh; position:relative;`
const ImageContainer = styled.div`width:100%; height:100%;`
const Image=styled.img `width:100%; height:100%; object-fit:cover;object-position:left top: 5%;`
const SliderInfo = styled.div`position:absolute; top:0; left:0;`
const SliderHeading = styled.h2``
const SliderDescription = styled.p``
const Button=styled.button``

const Slider = () => {
    return (
        <SliderContainer>
            {
                slides.map((slide, index) => {
                    
                    return (
                        <SliderItem>
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