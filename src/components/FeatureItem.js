import styled from "styled-components"

const FeatureItemContainer = styled.div`box-shadow: 1px 1px 4px light-grey; width:fit-content; display:flex; align-items: center; gap: 1em; border-radius:5px; border: 1px solid lightGray; padding:1em`
const FeatureItemText = styled.h3``

const FeatureItem = ({ text, icon, borderColor }) => {
    return (
        <FeatureItemContainer style={{borderTop:`5px solid ${borderColor}`}}>
            {icon}
            <FeatureItemText>{text}</FeatureItemText>

        </FeatureItemContainer>
    )
}
export default FeatureItem