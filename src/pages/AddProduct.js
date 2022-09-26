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
const Img = styled.img`width: 100px; height: 100px;`

const AddProduct = () => {
    const [img, setImg] = useState("")


    const [formData, setformData] = useState({
        productName: "",
        productDescription: "",
        detailedDescription: "",
        category: "",
        price: 0,
        image: "",
        thumbNails: []
    })


    const images = (e, type) => {
        const files = e.target.files
        Array.from(files).forEach(file => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                setImg(fileReader.result)

                if (type == "single") {
                    setformData(prev => ({ ...prev, productImage: fileReader.result }))
                }
                else {
                    setformData(prev => ({ ...prev, thumbNails: [...prev.thumbNails, fileReader.result] }))
                }
            }
        })

        const base64 = file => {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader()
                fileReader.readAsDataURL(file)

                fileReader.onload = () => {
                    resolve(fileReader.result)
                }
                fileReader.onerror = (error) => {
                    reject(error)

                }
            })
        }

        // const file = e.target.files[0]
        // const fileReader = new FileReader()
        // fileReader.readAsDataURL(file)
        // fileReader.onload = () => {
        //     console.log(fileReader.result)
        //     setImg(fileReader.result)
        // }
        // fileReader.onerror = (error) => {
        //     console.log(error)
        // }
    }

    return (
        <>
            <Nav />
            <Form>
                <Label>Product Name:</Label>   <Inputs type="text" placeholder="Product Name"
                    onChange={(e) => setformData({ ...formData, productName: e.target.value })} />
                <Label>Product Description:</Label>   <Inputs type="text" placeholder="Product Description" onChange={(e) => setformData({ ...formData, productDescription: e.target.value })} />
                <Label>Detailed Product Description:</Label>  <TextArea placeholder="Detailed Description" rows="10" onChange={(e) => setformData({ ...formData, detailedDescription: e.target.value })} />
                <ComboBox onChange={(e) => setformData({ ...formData, category: e.target.value })}>
                    <ComboOption disabled defaultvalue>Please select your category</ComboOption>
                    <ComboOption >Pottery</ComboOption>
                    <ComboOption>Weavings</ComboOption>
                    <ComboOption>Sculpture</ComboOption>
                    <ComboOption>Beadery</ComboOption>
                    <ComboOption>Decoration</ComboOption>
                    <ComboOption>Dress</ComboOption>

                </ComboBox>
                <Label></Label>Price: <Inputs type="text" placeholder="Price"
                    onChange={(e) => setformData({ ...formData, price: e.target.value })} />
                <Label>Image:</Label><Inputs type="file" placeholder="Image" onChange={(e) => images(e, "single")}
                />
                <Img src={img} />

                <Label>Thumbnails:</Label>  <Inputs type="file" placeholder="Image" multiple
                    onChange={(e) => images(e, "multiple")} /> 
                <SubmitButton type="button" onClick={() => console.log(formData)} />


            </Form>
            <Footer />
        </>
    )
}
export default AddProduct