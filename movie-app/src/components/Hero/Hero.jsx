import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import Image from "../ui/Image";
import Heading from "../ui/Heading";

const Container = styled.div`
    margin: 1rem;

    @media (min-width: 992px) {
    max-width: 1200px;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    }
`;

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
`;

const HeroLeft = styled.div`
    margin: 2rem 1.5rem;

    @media (min-width: 992px) {
        flex-basis: 45%;
        padding-left: 1rem;
    }
`;

const HeroRight = styled.div`
    @media (min-width: 992px) {
        flex-basis: 55%;
        display: flex; 
        justify-content: center;
        align-items: right;
    }
`;

const HeroImage = styled(Image)`
    max-width: 88%;
    height: auto;

    @media (min-width: 992px) {
        margin-left: 1.1rem;
        height: auto;
    }
`;

const Heading2 = styled(Heading)`
    color: #DA0037;
    margin-bottom: 1rem;
`;

const Heading3 = styled(Heading)`
    color: #3f4855;
    margin-bottom: 1rem;
`;

const StyledParagraph = styled(Paragraph)`
    color: #64748b;
    margin-bottom: 1.5rem;
    text-align: justify;

    @media (min-width: 992px) {
        text-align: left;
    }
`;

const Hero = () => {
    const [movie, setMovie] = useState("");

    const fetchMovie = async () => {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
    };

    useEffect(() => fetchMovie, []);

    return (
        <Container>
            <HeroSection>
                <HeroLeft>
                    <Heading2 type="h2">{movie.Title}</Heading2>
                    <Heading3 type="h3">{movie.Genre}</Heading3>
                    <StyledParagraph>{movie.Plot}</StyledParagraph>
                    <Button variant="primary" size="lg">Watch</Button>
                </HeroLeft>
                <HeroRight>
                    <HeroImage src={movie.Poster} alt={movie.Title} />
                </HeroRight>
            </HeroSection>
        </Container>
    );
}

export default Hero;