import styled from "styled-components"
import {bestSellers} from "../data"

const BestSellersItemsContainer = styled.div``
const ImageContainer = styled.div`width: 100%; height: 100%;`
const Image = styled.img`width: 100%; height: 100%;`
const BestSellerItemsHeading = styled.h3`text-align: center; font-size: 2rem;`
const BestSellerItem = styled.h3`text-transform: capitalize;`
const BestSellerPrice = styled.p``
const AddButton = styled.button`background: green; padding: .5em 1.5em; border-radius: 5px; border:none; box-shadow: 2px 2px 3px grey; cursor:pointer;`
const BuyNow = styled.button`margin-left: 1em; background: orange; padding: .5em 1.5em; border-radius:5px; border:none; box-shadow: 2px 2px 3px grey; cursor:pointer;`
const BestSellersData = styled.div`width: 30%;`
const Container=styled.div` width: 90%; margin: 0 auto; display: flex; gap: .2em;`

const BestSellersItems = () => {
    return (
        <BestSellersItemsContainer>
            <BestSellerItemsHeading>Best Sellers</BestSellerItemsHeading>
            <Container>
            {
                bestSellers.map((bestSelling, index) => {
                    return (
                        <BestSellersData>
                            <ImageContainer>
                                <Image src={bestSelling.img} />
                            </ImageContainer>
                            <BestSellerItem>{bestSelling.name}</BestSellerItem>
                            <BestSellerPrice>Kshs. 500/=</BestSellerPrice>
                            <AddButton>Add to cart</AddButton>
                            <BuyNow>Buy Now</BuyNow>
                        </BestSellersData>)
                })

                }
                </Container>
        </BestSellersItemsContainer >
    )
}
export default BestSellersItems