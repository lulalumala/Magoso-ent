import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';


const NewsLetterContainer=styled.div`margin:1em 0;`
const SubscribeHeading = styled.h3`text-align:center; font-size: 2em; color:green;`
const SubscribeInfo = styled.p`text-align:center;`
const SubscribeEmail = styled.input`padding:.5em; border:1px solid orange; font-size:1rem;border-radius:5px; outline:none;`
const SubscribeButton = styled.button`color:orange; background: green; cursor:pointer; border-radius:5px;`
const NewsLetterSubscribe=styled.div` display: flex; justify-content:center; align-items:center; gap: 1em;`


const NewsLetter = () => {
    return (
        <NewsLetterContainer>
          
            <SubscribeHeading>Subscribe to our NewsLetter</SubscribeHeading>
            <SubscribeInfo>Subscribe to our newsletter for updates on latest promotions and offers.</SubscribeInfo>
           <NewsLetterSubscribe>
            <SubscribeEmail type="text" placeholder="Email Address"></SubscribeEmail>
            <SubscribeButton>{<SendIcon/>}</SubscribeButton>
            </NewsLetterSubscribe>

        </NewsLetterContainer>
    )
}
export default NewsLetter