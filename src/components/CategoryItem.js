import styled from "styled-components"
// import Categories from "./Categories"
import { categories } from "../data"

const ImageContainer = styled.div``
const Image = styled.img`width:100%; height: 100%; object-fit:cover; position:relative;`
const CategoryText = styled.h3` `
const ImageContain = styled.div`width:100%; height: 100%;`
const ImageCategory = styled.div`position:relative; display: flex; align-items: center; justify-content: center; width: 30%; cursor:pointer;`
const CategoryName = styled.div`position:absolute; color:white; font-size:2rem; text-transform: capitalize; width:100%; height: 100%; display: flex; align-items: center; justify-content: center; background:rgba(0,0,0,.5);`
const Container = styled.div`display:flex; flex-direction:row; justify-content: center; flex-wrap:wrap; gap: 2em; width: 80%; margin: 0 auto;`
const BrowseCategories=styled.div`font-weight: bold; text-align: center; font-size: 2rem; margin: 1em 0; color:green;`

const CategoryItem = () => {
    return (
        <ImageContainer>

                <BrowseCategories>Browse Categories</BrowseCategories>
            <Container>
                {
                    categories.map((categorydata, index) => {
                        return (

                            <ImageCategory key={index}>
                                <ImageContain>
                                    <Image src={categorydata.img} />
                                </ImageContain>
                                <CategoryName>
                                    <CategoryText>{categorydata.name}</CategoryText>
                                </CategoryName>
                            </ImageCategory>
                        )
                    })
                }
            </Container>
        </ImageContainer>
    )
}

export default CategoryItem