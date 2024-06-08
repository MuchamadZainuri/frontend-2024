import styled from "styled-components";

const Dropdown = styled.select`
    width: 100%;
    border-radius: 10px;
    border: 2px solid #c96d6d;
    padding: 0.8rem 0.5rem;
    font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.md};
`;

const Option = styled.option``;

export { Dropdown, Option };