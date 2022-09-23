import { Check } from "@mui/icons-material";
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from "styled-components";


const RegisterContainer = styled.div`display: flex; justify-content: space-between; gap: 2em; padding: 1em; width: 85%; margin: 0 auto;`
const RegisterDetails = styled.div`color: green; width: 50%;`
const LoginCta = styled.div`color: white; border-radius: 5px;

background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url("https://images.pexels.com/photos/7314474/pexels-photo-7314474.jpeg?cs=srgb&dl=pexels-meruyert-gonullu-7314474.jpg&fm=jpg"); background-repeat: no repeat; background-size: cover;
width: 50%; font-size: 3rem; font-weight: bold; display: flex; flex-direction: column; gap: 2em; justify-content: center; align-items: center; `
const RegisterH1 = styled.h1`text-align: center; font-size:4rem;`
const RegisterH2 = styled.h2`text-align: center; margin: 3em 0;`
const EmailContainer = styled.div`border-bottom: 4px solid orange; height: fit-content;`
const EmailText = styled.p`color: gray; font-size: 1.5rem; padding-left: 1em; position:relative; bottom:4em; opacity:0;color:green;`
const EmailInput = styled.input`border: none; width: 100%; outline: none; padding:0.5em 1em; font-size: 1.5rem;
&:focus {
         &::placeholder {
        color:transparent;
    }
}

`
const PasswordText = styled.p`color: gray; font-size: 1.5rem; opacity:0;`
const PasswordContainer = styled.div`border-bottom: 4px solid orange; margin-bottom: .5em;`
const PasswordInput = styled.input`border:none; width: 100%; outline: none; padding:.5em 1em; font-size: 1.5rem;`
// visibility icon
const ShowPassword = styled.div`width: fit-content; height: fit-content; cursor: pointer;`



const InputShowFlex = styled.div`display: flex; align-items: center;`
const RegisterButton = styled.button`width: 100%; background: green; color: orange; padding: 1em 2em; border-radius: 5px; border: none; font-size: 1.5rem;`
const CheckBox = styled.input``
const Remember = styled.label``
// const ForgotPassword = styled.p``
const NewLabel = styled.label`font-size:1rem; `
const CreateAccountLabel = styled.div`display: flex; justify-content: center; align-items: center; gap: 1em;`
const CreateAccount = styled.button`background: transparent; color: green; border: 1px solid green; padding: 1em 2em; border-radius: 5px; `
const CtaWelcome = styled.h3``
const CtaMagoso = styled.p``
const CtaHome = styled.p``
const LoginReset = styled.div`display: flex; justify-content:space-between; padding: 1em 0;`
const CheckedRemember = styled.div``
// const CopyRight=styled.p`text-align: center; padding: 1em 0;`

const RegisterForm = () => {
    const [show, setShow] = useState(false)

    return (
        <RegisterContainer>
            <RegisterDetails>
                <RegisterH1>MAGOSO ENT. </RegisterH1>
                <RegisterH2>REGISTER </RegisterH2>
                <EmailContainer className="email-container">
                    <EmailInput type="email" placeholder="Email" className="email" />
                    <EmailText className="email-text">Email</EmailText>
                </EmailContainer>
                <PasswordContainer>
                    <PasswordText>Password</PasswordText>
                    <InputShowFlex>
                        <PasswordInput type={show ? "text" : "password"} placeholder="Password" />

                        {/* visibility */}
                        <ShowPassword onClick={() => setShow(prev => !prev)}>{show ? <VisibilityIcon /> : <VisibilityOffIcon />}</ShowPassword>
                    </InputShowFlex>
                </PasswordContainer>
                <PasswordContainer>
                    <PasswordText>Confirm Password</PasswordText>
                        <PasswordInput type="password" placeholder="Confirm Password" />
                </PasswordContainer>
                <RegisterButton>Register</RegisterButton>
                <LoginReset>
                    <CheckedRemember>
                        <CheckBox type="checkbox" />
                        <Remember>I agree to terms and conditions.</Remember>
                    </CheckedRemember>
                </LoginReset>
                <CreateAccountLabel>
                    <NewLabel>New to Magoso Ent?</NewLabel>
                    <CreateAccount>Create Account</CreateAccount>
                </CreateAccountLabel>

                {/* <CopyRight>Magoso Ent. &copy; 2021 </CopyRight> */}
            </RegisterDetails>
            <LoginCta>
                <CtaWelcome>Welcome to </CtaWelcome>
                <CtaMagoso>MAGOSO ENT.</CtaMagoso>
                <CtaHome>The home of reliable shoping.</CtaHome>
            </LoginCta>


        </RegisterContainer>
    )
}
export default RegisterForm