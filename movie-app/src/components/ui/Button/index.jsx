import styled, { css } from "styled-components";

const index = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors["primary"]};
    font-size: ${({ size, theme }) => theme.fontSize[size] || theme.fontSize["md"]};
    padding: ${({ padding, theme }) => theme.padding[padding] || theme.padding["md"]};
    cursor: pointer;
    ${({ full }) => full && css`
        width: 100%;
        display: block;
    `}
    text-decoration:none;
`;

export default index;