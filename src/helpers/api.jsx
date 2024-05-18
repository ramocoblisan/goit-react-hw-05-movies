import axios from 'axios';

const KEY = "357832701cf86b43284c723babec1587";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export const getTrendingMovies = async () => {
    try {
        const response = await axios.get(`/trending/movie/day?api_key=${KEY}&language=en-US`);
        if (response.status !== 200) {
            throw new Error("Error fetching trending movies!");
        }
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getMoviesDetails = async (movieId) => {
    try{
        const response = await axios.get(`/movie/${movieId}?api_key=${KEY}&language=en-US`)
        if(response.status !== 200) {
            throw new Error("Error fetching details movies!");
        }
        return response.data;
    } catch(error){
        console.error(error);
    }
};

export const getMoviesCredits = async (movieId) => {
    try{
        const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
        if(response.status !==200){
            throw new Error ("Error fetching credits movies!")
        }
        return response.data;
    }catch(error){
        console.error(error);
    }
};

export const getMoviesReviews = async(movieId)=>{
    try{
        const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`)
        if(response.status !==200){
            throw new Error ("Error fetching credits movies!")
        }
        return response.data;

    }catch(error){
        console.error(error);
    }
}

export const getSearchMovies = async (query) => {
    try {
        const response = await axios.get(`/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
        if (response.status !== 200){ 
            throw new Error("Error fetching movies search!");
        }
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; 
    }
}

export const getTrailerMovie = async (movieId) => {
    try{
        const response = await axios.get(`/movie/${movieId}/videos?api_key=${KEY}&language=en-US`)
        if(response.status !== 200){
            throw new Error ("Error fetching movies video!")
        }
        return response.data;

    }catch(error){
        console.error(error)
    }
}