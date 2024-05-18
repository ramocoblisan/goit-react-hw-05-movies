import React, { useEffect, useState } from "react";
import { getSearchMovies } from "../../helpers/api";
import SearchBar from "components/SearchBar/SearchBar";
import PostersMovies from "components/PostersMovies/PostersMovies";
import Spinner from "components/Spinner/Spinner";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [isSearchLoading, setIsSearchLoading] = useState(false);

    useEffect(() => {
        if (query.trim() !== "") {
            setIsSearchLoading(true); 
            getSearchMovies(query)
                .then(response => {
                    console.log("Movies search:", response);
                    setMovies(response.results);
                })
                .catch(error => {
                    console.log("Error fetching movies search:", error.message);
                })
                .finally(() => {
                    setIsSearchLoading(false); 
                });
        }
    }, [query]);

    const handleSubmit = (newQuery) => {
        if (newQuery.trim() !== '') {
            setQuery(newQuery);
        }
    }

    return (
        <>
            <SearchBar query={query} onSubmit={handleSubmit} />
            {isSearchLoading ? <Spinner /> : <PostersMovies movies={movies} context = "movies"/>}
        </>
    );
}
export default Movies;