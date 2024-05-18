import React from "react";
import PropTypes from 'prop-types'; 
import { IMAGE_URL } from "helpers/api";
import styles from "./PostersMovies.module.css"
import { Link, useNavigate } from "react-router-dom";

const PostersMovies = ({ movies, context }) => {
    const navigate = useNavigate();

    const handleMovieClick = (movieId) => {
        if (context === "movies") {
            navigate(`/movies/${movieId}`);
        } else {
            navigate(`/movies/movies/${movieId}`);
        }
    };

    const getReleaseYear = (releaseDate) => {
        if (releaseDate) {
            const year = releaseDate.slice(0, 4);
            return year;
        }
        return "";
    };

    return (
        <>
            <ul className={styles.gallery}>
                {movies.map(movie => (
                    <li key={movie.id} className={styles.itemsImg}>
                       <Link to={`/movies/${movie.id}`} 
                       className={styles.linkPoster} 
                       onClick={() => handleMovieClick(movie.id)}
                       >
                        {
                            movie.poster_path ? 
                            <img
                            className={styles.itemImg} 
                            src={IMAGE_URL + movie.poster_path} 
                            alt={movie.title}
                           />
                           :
                           <div>No Poster Available</div>
                        }
                        <p className={styles.posterVote}>{movie.vote_average.toFixed(1)}</p>
                        <p className={styles.posterTitle}>{movie.title} |{getReleaseYear(movie.release_date)}</p>
                        </Link> 
                    </li>
                ))}
            </ul>
        </>
    );
}

PostersMovies.propTypes =  {
    movies: PropTypes.array.isRequired,
}
export default PostersMovies;