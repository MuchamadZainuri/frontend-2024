import styled from 'styled-components';
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
    
const StyledFooter = styled.div`
    background-color: #222831;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 0.5rem;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <footer>
                <StyledHeading type="h3">Movie App</StyledHeading>
                <Paragraph>Created by JayZeec</Paragraph>
            </footer>
        </StyledFooter>
    );
}

export default Footer;