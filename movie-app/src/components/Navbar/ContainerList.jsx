import styled, { css } from "styled-components";

const ContainerList = styled.div`
    margin-top: 1.2rem;
    display: none;

    ${({ isOPen }) => isOPen && css`
        margin-top: 1.2rem;
        display: flex;
    `}

    @media (min-width: 768px) {
        margin-top: 0;
        display: flex;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

    li{
        margin-bottom: 1rem;
        cursor: pointer;

        @media (min-width: 768px) {
            margin: 0 1rem;
        }
    }
`;


const NavbarToggle = styled.div`
    font-size: 2rem;
    cursor: pointer;
    margin-top: auto;

    @media (min-width: 768px) {
        display: none;
    }

    @media (min-width: 992px) {
        margin-top: 0;
        display: none;
    }

    ${({ isOPen }) => isOPen && css`
        margin-top: 0.3rem;
        margin-bottom: auto;
    `}
`;




export {ContainerList, NavbarToggle};