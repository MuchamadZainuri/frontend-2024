import styled from "styled-components";

const StyleDetailMovie = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .poster{
        margin: 2rem 1.5rem;

        @media (min-width: 992px) {
        flex-basis: 35%;
        display: flex; 
        justify-content: center;
        align-items: right;
        }
    }

    .info{
        @media (min-width: 992px) {
        flex-basis: 65%;
        padding-left: 1rem;
        }
    }

`;

export default StyleDetailMovie;