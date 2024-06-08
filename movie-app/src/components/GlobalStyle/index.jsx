import { createGlobalStyle } from "styled-components";

const index = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        margin: 0;
        font-family: 'Poopins','Open Sans', sans-serif; 
        background-color: #EFF5F5;
    }

`;

export default index
