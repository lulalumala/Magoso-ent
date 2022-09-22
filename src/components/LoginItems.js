import { Check } from "@mui/icons-material"
import styled from "styled-components"

const LoginContainer = styled.div`display: flex; height:70vh; justify-content: space-between; gap: 1em;`
const LoginDetails = styled.div`color: green; width: 50%;`
const LoginCta = styled.div`width: 50%; font-size: 2rem; display: flex; flex-direction: column; gap: 2em; justify-content: center; align-items: center;`
const LoginH1 = styled.h1`text-align: center;`
const LoginH2 = styled.h2`text-align: center; margin: 2em 0;`
const EmailInput = styled.input`border: none; border-bottom:5px solid lightgrey;width: 100%; outline: none; padding: 1em; font-size: 1.5rem;
&:focus {
    border-bottom:5px solid orange;
    &::placeholder {
        color:transparent;
    }
}

`
const PasswordInput = styled.input`border:none; width: 100%; outline: none; padding: 1em; font-size: 1.5rem; `
const LoginButton = styled.button`width: 100%; background: green; color: orange; padding: 1em; 2em; border-radius: 5px; border: none; font-size: 1.5rem;`
const CheckBox = styled.input``
const Remember = styled.label``
const ForgotPassword = styled.p``
const NewLabel = styled.label``
const CreateAccount = styled.button``
const CtaWelcome = styled.h3``
const CtaMagoso = styled.p``
const CtaHome = styled.p``

const LoginForm = () => {
    return(
    <LoginContainer>
        <LoginDetails>
            <LoginH1>MAGOSO ENT. </LoginH1>
            <LoginH2>LOGIN </LoginH2>
            <EmailInput placeholder="E-mail" />
            <PasswordInput placeholder="Password" />
            <LoginButton>Login</LoginButton>
            <CheckBox type="checkbox" />
            <Remember>Remember me</Remember>
            <ForgotPassword>Forgot your password?</ForgotPassword>
            <NewLabel>New to Magoso Ent?</NewLabel>
            <CreateAccount>Create Account</CreateAccount>
        </LoginDetails>
        <LoginCta>
            <CtaWelcome>Welcome to </CtaWelcome>
            <CtaMagoso>MAGOSO ENT.</CtaMagoso>
            <CtaHome>The home of reliable shoping.</CtaHome>
        </LoginCta>


        </LoginContainer>
        )
}
export default LoginForm