import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    border-radius: 10px;
    border: 2px solid #c96d6d;
    padding: 0.8rem 0.5rem;
    font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.md};
`;

export default Input;