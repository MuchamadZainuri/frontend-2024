import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import Image from "../ui/Image";
import Heading from "../ui/Heading";
import axios from 'axios';

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
    const API_KEY = import.meta.env.VITE_API_KEY;
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie && movie.videos.results[0].key;
    
    const fetchTrendingMovies = async () => {
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const data = await axios(URL);
        const firstMovie = data.data.results[0];
        return firstMovie;
    };

    useEffect(() => fetchTrendingMovies, []);

    const fetchDetailMovie = async () => {
        const trendingMovie = await fetchTrendingMovies();
        const id = trendingMovie.id;

        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const data = await axios(URL);
        setMovie(data.data);
    };

    useEffect(() => fetchDetailMovie, []);

    return (
        <Container>
            <HeroSection>
                <HeroLeft>
                    <Heading2 type="h2">{movie.title}</Heading2>
                    <Heading3 type="h3">{genres}</Heading3>
                    <StyledParagraph>{movie.overview}</StyledParagraph>
                    <Button
                        as="a"
                        href={`https://www.youtube.com/watch?v=${idTrailer}`}
                        target="_blank"
                        variant="primary"
                        size="lg"
                    >Watch</Button>
                </HeroLeft>
                <HeroRight>
                    <HeroImage
                        src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                </HeroRight>
            </HeroSection>
        </Container>
    );
}

export default Hero;