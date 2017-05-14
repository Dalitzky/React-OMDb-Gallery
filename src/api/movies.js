import axios from 'axios';

const API = 'http://www.omdbapi.com';

export async function searchMovies(name) {
    const movieName = name.toLowerCase();
    const movies = await axios.get(API, {
        params: {
            s: movieName,
            r: 'json',
            type: 'movie'
        }
    });

    return movies.data;
}

export async function getMovie(imdbId) {
    const movie = await axios.get(API, {
        params: {
            i: imdbId,
            r: 'json'
        }
    });

    return movie.data;
}
