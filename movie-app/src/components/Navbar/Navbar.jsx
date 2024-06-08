import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";
import Heading from "../ui/Heading";
import { useState } from 'react';
import {ContainerList, NavbarToggle} from './ContainerList';

const Container = styled.div`
    background-color: #222831;
    padding: 1rem 2rem;
    color: #fff;

    @media (min-width: 992px) {
        padding: 1.3rem 3.4rem;
    }
`;

const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const Brand = styled(Heading)`
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const StyledLink = styled(Link)`
    font-size: 1.2rem;
    text-decoration: none;
    color: #fff;
`;

const NavbarGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

@media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    
}


`;

const Navbar = () => {
    const [isOPen, setIsOpen] = useState(false)
    const handleClick = () => { 
        setIsOpen(!isOPen)
    }

    return (
        <Container>
            <StyledNavbar>
                <NavbarGroup>
                    <div>
                        <Brand type="h2">Movie App</Brand>
                    </div>
                    <ContainerList isOPen={isOPen}>
                        <ul>
                            <li>
                                <StyledLink to="/"> Home </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/movie/create"> Add Movie </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/movie/popular"> Popular </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/movie/now"> Now Playing </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/movie/top"> Top Rated </StyledLink>
                            </li>
                        </ul>
                    </ContainerList>
                </NavbarGroup>
                <NavbarToggle onClick={handleClick} isOPen={isOPen}>
                    {isOPen ? <RiCloseLargeLine/> : <FaBars />}
                </NavbarToggle>
            </StyledNavbar>
        </Container>
    )
}

export default Navbar;