import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import DetailMovie from '../../components/DetailMovie';
import URL from "../../utils/constants/endpoints";

const Detail = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    const fetchRecommendations = async () => {
        const response = await axios(URL.RECOMMENDATIONS(id));
        setMovies(response.data.results);
    }

    useEffect(() => fetchRecommendations);

    return (
        <>
            <DetailMovie id={id} />
            <Movies movies={movies} title="Recommendations" />
        </>
    );
}

export default Detail
