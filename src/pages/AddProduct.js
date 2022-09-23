import { useState } from 'react';
import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/footer";

const Form = styled.form`display: flex; flex-direction: column; width: 70%; margin: 0 auto; gap: 1em; padding: 2em ; background: whitesmoke; color: green;
`
const Inputs = styled.input`padding: 1em; font-size: 1rem; height: 1%; outline: none; box-shadow: 0 0 5px orange; border: none;`
const TextArea = styled.textarea`padding: 1em; font-size: 1rem; outline: none; border:none; box-shadow: 0 0 5px orange; width: 100%;`

const ThumbNails = styled.img``
const ComboBox = styled.select`font-size: 1rem; padding: 1em; border: none; outline: none; box-shadow: 0 0 5px orange; color: green;`
const ComboOption = styled.option`color: green;`
const SubmitButton = styled.input`color: orange; background: green; padding: 1em; font-size: 1rem; border:none; outline: none; border-radius: 5px; font-weight: bold; text-transform: uppercase;
cursor: pointer;`
const Label = styled.label` `

const AddProduct = () => {
    const [formData, setformData] = useState({
        productName: "",
        productDescription: "",
        detailedDescription: "",
        category: "",
        price: 0,
        image: "",
        thumbNails: []
    })
    return (
        <>
            <Nav />
            <Form>
                <Label>Product Name:</Label>   <Inputs type="text" placeholder="Product Name"
                    onChange={(e) => setformData({...formData, productName:e.target.value})} />
                <Label>Product Description:</Label>   <Inputs type="text" placeholder="Product Description" onChange={(e) => setformData({...formData, productDescription:e.target.value})}/>
                <Label>Detailed Product Description:</Label>  <TextArea placeholder="Detailed Description" rows="10" onChange={(e) => setformData({...formData, detailedDescription:e.target.value})}/>
                <ComboBox onChange={(e) => setformData({...formData, category:e.target.value})}>
                    <ComboOption disabled selected>Please select your category</ComboOption>
                    <ComboOption >Pottery</ComboOption>
                    <ComboOption>Weavings</ComboOption>
                    <ComboOption>Sculpture</ComboOption>
                    <ComboOption>Beadery</ComboOption>
                    <ComboOption>Decoration</ComboOption>
                    <ComboOption>Dress</ComboOption>

                </ComboBox>
                <Label></Label>Price: <Inputs type="text" placeholder="Price"
                    onChange={(e) => setformData({ ...formData, price: e.target.value })} />
                <Label>Image:</Label><Inputs type="file" placeholder="Image" 
                />
                <Label>Thumbnails:</Label>  <Inputs type="file" placeholder="Image" multiple />
                <SubmitButton type="button" onClick={()=>console.log(formData) } />


            </Form>
            <Footer />
        </>
    )
}
export default AddProduct