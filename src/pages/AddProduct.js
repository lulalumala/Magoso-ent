import { useState } from 'react';
import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import { db } from '../Firebase';
import { collection, addDoc } from "firebase/firestore"
import { getStorage, ref, uploadString } from "firebase/storage";

const Form = styled.form`display: flex; flex-direction: column; width: 70%; margin: 0 auto; gap: 1em; padding: 2em ; background: whitesmoke; color: green;
`
const Inputs = styled.input`padding: 1em; font-size: 1rem; height: 1%; outline: none; box-shadow: 0 0 5px orange; border: none;`
const TextArea = styled.textarea`padding: 1em; font-size: 1rem; outline: none; border:none; box-shadow: 0 0 5px orange; width: 100%;`

const ThumbNails = styled.img``
const ComboBox = styled.select`font-size: 1rem; padding: 1em; border: none; outline: none; box-shadow: 0 0 5px orange; color: green;`
const ComboOption = styled.option`color: green;`
const SubmitButton = styled.input`background: green; padding: 1em; font-size: 1.5rem; border:none; outline: none; border-radius: 5px; font-weight: bold; cursor: pointer; color: orange;`
const Label = styled.label` `
const Img = styled.img`width: 100px; height: 100px;`
const ThumbsContainer = styled.div`display: flex; gap: 1em; overflow: scroll;`

const AddProduct = () => {
    const [img, setImg] = useState("")
    const [thumbs, setThumbs] = useState([])


    const [formData, setformData] = useState({
        productName: "",
        productDescription: "",
        detailedDescription: "",
        category: "",
        price: "",
        salePrice: "",
        offer: "Not on offer",
        productImage: "",
        thumbNails: []
    })


    const images = (e, type) => {
        const files = e.target.files
        Array.from(files).forEach(file => {
            console.log(file.name)
            const storage = getStorage();
        const storageRef = ref(storage, file.name);
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {

                if (type === "single") {
                    uploadString(storageRef, fileReader.result, 'data_url').then((snapshot) => {
                        setformData(prev=>({...prev, productImage:`https://firebasestorage.googleapis.com/v0/b/magoso-ent-90dbc.appspot.com/o/${file.name}?alt=media`}))
                      console.log('Uploaded a base64 string!');
                    });
                    // setformData(prev => ({ ...prev, productImage: fileReader.result }))
                    setImg(fileReader.result)
                }
                else {
                    uploadString(storageRef, fileReader.result, 'data_url').then((snapshot) => {
                        setformData(prev=>({...prev, thumbNails:[...prev.thumbNails, `https://firebasestorage.googleapis.com/v0/b/magoso-ent-90dbc.appspot.com/o/${file.name}?alt=media`]}))
                      console.log('Uploaded a base64 string!');
                    });
                    // setformData(prev => ({ ...prev, thumbNails: [...prev.thumbNails, fileReader.result] }))

                    setThumbs(prev => [...prev, fileReader.result])
                }
            }
        })
    }

    const handleAddProduct = async () => {
        try {
            const docRef = await addDoc(collection(db, "products"), formData)
            console.log("Product saved")
            setformData({
                productName: "",
                productDescription: "",
                detailedDescription: "",
                category: "",
                price: "",
                salePrice: "",
                offer: "Not on offer",
                productImage: "",
                thumbNails: []
            })
            // setImg("")
            // setThumbs("")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    // const base64 = file => {

    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader()
    //         fileReader.readAsDataURL(file)

    //         fileReader.onload = () => {
    //             resolve(fileReader.result)
    //         }
    //         fileReader.onerror = (error) => {
    //             reject(error)

    //         }
    //     })
    // }

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

    return (
        <>
            <Nav />
            <Form>
                <Label>Product Name:</Label>   <Inputs type="text" value={formData.productName} placeholder="Product Name"
                    onChange={(e) => setformData({ ...formData, productName: e.target.value })} />
                <Label>Product Description:</Label>   <Inputs type="text" value={formData.productDescription} placeholder="Product Description" onChange={(e) => setformData({ ...formData, productDescription: e.target.value })} />
                <Label>Detailed Product Description:</Label>  <TextArea value={formData.detailedDescription} placeholder="Detailed Description" rows="10" onChange={(e) => setformData({ ...formData, detailedDescription: e.target.value })} />
                <ComboBox value={formData.category} onChange={(e) => setformData({ ...formData, category: e.target.value })}>
                    <ComboOption disabled selected>Please select your category</ComboOption>
                    <ComboOption >Pottery</ComboOption>
                    <ComboOption>Weavings</ComboOption>
                    <ComboOption>Sculpture</ComboOption>
                    <ComboOption>Beadery</ComboOption>
                    <ComboOption>Decoration</ComboOption>
                    <ComboOption>Dress</ComboOption>

                </ComboBox>
                <Label></Label>Price: <Inputs value={formData.price} type="text" placeholder="Price"
                    onChange={(e) => setformData({ ...formData, price: parseInt(e.target.value) })} />

                <Label>Sale Price</Label><Inputs value={formData.salePrice} type="text" placeholder="Sale Price"
                    onChange={(e) => setformData({ ...formData, salePrice: parseInt(e.target.value) })} />

                <ComboBox value={formData.offer} onChange={(e) => setformData({ ...formData, offer: e.target.value })}>
                    <ComboOption>Not on offer</ComboOption>
                    <ComboOption>On offer</ComboOption>
                </ComboBox>


                <Label>Image:</Label><Inputs type="file" placeholder="Image" onChange={(e) => images(e, "single")}
                />
                <Img src={img} />

                <Label>Thumbnails:</Label>  <Inputs type="file" placeholder="Image" multiple
                    onChange={(e) => images(e, "multiple")} />
                <ThumbsContainer>
                    {
                        thumbs.map(thumb => {
                            return (
                                <Img src={thumb} />
                            )
                        })
                    }
                </ThumbsContainer>

                <SubmitButton value="SUBMIT" type="button" onClick={handleAddProduct} />

<Img src='https://firebasestorage.googleapis.com/v0/b/magoso-ent-90dbc.appspot.com/o/Screenshot from 2022-08-22 16-43-13.png?alt=media'/>
            </Form>
            <Footer />
        </>
    )
}
export default AddProduct
