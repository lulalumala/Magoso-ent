// import styled from "styled-components"
import FeatureItem from "./FeatureItem"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PercentIcon from '@mui/icons-material/Percent';
import styled from "styled-components";
import DiamondIcon from '@mui/icons-material/Diamond';
const FeatureContainer = styled.div`padding:1em 0;`
const Container = styled.div`display:flex; justify-content:space-between; width:80%; margin:0 auto;`


const Features = () => {
    return (
        <FeatureContainer>
            <Container>
                <FeatureItem icon={<AccessTimeIcon />} text="24/7" borderColor="green" />
                <FeatureItem icon={<PercentIcon />} text="Great Offers" borderColor="orange" />
                <FeatureItem icon={<DiamondIcon />} text="Quality" borderColor="purple" />
            </Container>
        </FeatureContainer>
    )
}
export default Features