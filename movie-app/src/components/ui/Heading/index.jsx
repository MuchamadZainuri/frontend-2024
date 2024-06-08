import styled from "styled-components";

const Heading = styled.h1`
    font-size: ${({theme, type}) => theme.heading[type] || theme.heading.h1};
`;

export default Heading;
