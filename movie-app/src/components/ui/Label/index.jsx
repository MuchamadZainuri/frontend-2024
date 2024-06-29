import styled from "styled-components";

const Label = styled.label`
    color: #3f4855;
    font-size: ${({ size, theme }) => theme.fontSize[size] || theme.fontSize.md};
    cursor: pointer;
`;

export default Label;