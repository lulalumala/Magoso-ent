import styled from "styled-components";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const FooterContainer = styled.div`display:flex; justify-content:flex-end; background:orange; color:green;`
const FooterMagoso = styled.div`width:23%;`
const FooterMagosoText = styled.p``
const FooterCustomer = styled.div`width:23%;`
const CustomerText = styled.p``
const FooterHeading = styled.h3`font-size:1.5em;`
const FooterLinks = styled.div`width:23%;`
const LinkText = styled.p``
const FooterContact = styled.div`width:23%;`
const ContactText = styled.p``

const Footer = () => {
    return (
        <FooterContainer>
            <FooterMagoso>
                <FooterHeading>MAGOSO ENT</FooterHeading>
                <FooterMagosoText>The #1 E-Commerce website in the south of Sahara and North of Limpompo</FooterMagosoText>
            </FooterMagoso>
            <FooterCustomer>
                <FooterHeading>FOR CUSTOMERS</FooterHeading>
                <CustomerText>How to order</CustomerText>
                <CustomerText>Payment Methods</CustomerText>
                <CustomerText>My Account</CustomerText>
                <CustomerText>Track Orders</CustomerText>
            </FooterCustomer>
            <FooterLinks>
                <FooterHeading>QUICK LINKS</FooterHeading>
                <LinkText>Shop</LinkText>
                <LinkText>About Us</LinkText>
                <LinkText>Return Policy</LinkText>
                <LinkText>Terms & Conditions</LinkText>

            </FooterLinks>
            <FooterContact>
                <FooterHeading>CONTACT US</FooterHeading>
                <ContactText>{<LocationOnIcon/>}Kibera, Mashimoni, Nairobi, Kenya</ContactText>
                <ContactText>P.O Box 28873-00200</ContactText>
                <ContactText>{<CallIcon/>} Call: 0712345678</ContactText>
                <ContactText>{<EmailIcon/>} Email: info@magosoent.com</ContactText>
            </FooterContact>
        </FooterContainer>
    )
}
export default Footer