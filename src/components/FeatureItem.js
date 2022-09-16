import styled from "styled-components"

const FeatureItemContainer = styled.div``
const FeatureItemText = styled.h3``

const FeatureItem = ({ text, icon, borderColor }) => {
    return (
        <FeatureItemContainer>
            {icon}
            <FeatureItemText>{text}</FeatureItemText>

        </FeatureItemContainer>
    )
}
export default FeatureItem