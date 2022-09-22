import styled from "styled-components"
import { bestSellers } from "../data"

const BestSellersItemsContainer = styled.div``
const ImageContainer = styled.div``
const Image = styled.img`width: 100%; height: 350px; border-radius:5px; `
const BestSellerItemsHeading = styled.h3`text-align: center; font-size: 2rem; color:green;`
const BestSellerItem = styled.h3`text-transform: capitalize;`
const BestSellerPrice = styled.p`font-size:1.5rem;`
const AddButton = styled.button`background: green; color:white; padding: 1em 1.5em; border-radius: 5px; border:none; box-shadow: 2px 2px 3px grey; cursor:pointer;`
const BuyNow = styled.button`margin-left: 1em; background: orange; padding: 1em 1.5em; border-radius:5px; border:none; box-shadow: 2px 2px 3px grey; cursor:pointer;`
const BestSellersData = styled.div`
width: 30%;
box-shadow: 0px 0px 5px lightgrey; 
border-radius:5px; padding:1em;
transition:all .5s ease-in; 
&:hover{
    transform:scale(1.1);
    
}
`
const Container = styled.div` width: 80%; display: flex; justify-content:center; gap: 2em; margin: 0 auto;`

const BestSellersItems = () => {
    return (
        <BestSellersItemsContainer>
            <BestSellerItemsHeading>Best Sellers</BestSellerItemsHeading>
            <Container>
                {
                    bestSellers.slice(0, 3).map((bestSelling, index) => {
                        return (
                            <BestSellersData key={index}>
                                <ImageContainer>
                                    <Image src={bestSelling.img} />
                                </ImageContainer>
                                <BestSellerItem>{bestSelling.name}</BestSellerItem>
                                <BestSellerPrice>Kshs.{bestSelling.price}/=</BestSellerPrice>
                                <AddButton>Add to cart</AddButton>
                                <BuyNow>Buy Now</BuyNow>
                            </BestSellersData>
                        )
                    })

                }
            </Container>
        </BestSellersItemsContainer >
    )
}
export default BestSellersItems