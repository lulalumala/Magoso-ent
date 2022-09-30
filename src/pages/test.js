import {useState} from "react"
import { getStorage, ref, uploadString } from "firebase/storage";
const Test = () => {
    const [str, setStr] = useState("");
    const handleChange = (e) => {
        const file = e.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, file.name);
        
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            console.log(file.name)
            uploadString(storageRef, fileReader.result, 'data_url').then((snapshot) => {
                console.log(`https://firebasestorage.googleapis.com/v0/b/magoso-ent-90dbc.appspot.com/o/${file.name}?alt=media`)
              console.log('Uploaded a base64 string!');
            });
        }   
        fileReader.onerror = (error) => {   
            console.log(error);
        }

// Base64 formatted string

        


    }
    return ( 
        <>  
            <input type="file" onChange={(e)=>handleChange(e)}/>
        </>
    )
    
}

export default Test;