import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/footer";

const ShopContainer = styled.div``
const ImageContainer = styled.div``
const ImageInfo = styled.div``
const Image = styled.image``
const Product = styled.h2``
const ProductDesc = styled.p``
const ProductPrice = styled.p``

const Shop = () => {
    return (
        <>
            <Nav />
            <ShopContainer>
                <ImageContainer >
                    <Image />
                </ImageContainer>
                <ImageInfo>
                    <Product>Product Name</Product>
                    <ProductDesc>Product Description</ProductDesc>
                    <ProductPrice></ProductPrice>
                </ImageInfo>
            </ShopContainer>

            <Footer />
        </>
    )


}
export default Shop