// import styled from "styled-components"
import FeatureItem from "./FeatureItem"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PercentIcon from '@mui/icons-material/Percent';
import DiamondIcon from '@mui/icons-material/Diamond';

const Features = () => {
    return (
        <>
            <FeatureItem icon={<AccessTimeIcon/>} text="24/7" borderColor="green"/>
            <FeatureItem icon={<PercentIcon/> } text="Great Offers" borderColor="orange" />
            <FeatureItem icon={<DiamondIcon/>} text="Quality" borderColor="purple" />
        </>
    )
}
export default Features