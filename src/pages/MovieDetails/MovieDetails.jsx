import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams} from "react-router-dom";
import { IMAGE_URL, getMoviesDetails } from "helpers/api";
import styles from './MovieDetails.module.css';
import { MdArrowBackIos } from "react-icons/md";
import Spinner from "components/Spinner/Spinner";

const MoviesDetails = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { movieId } = useParams();

    useEffect(() => {
        setIsLoading(true); 
        getMoviesDetails(movieId)
            .then(response => {
                console.log('Response movie details:', response)
                setMovie(response);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId]);

    if (isLoading) {
        return <Spinner />;
    }
    
    if (!movie) {
        return <Spinner/>
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.containerBtn}>
                    <Link to='/goit-react-hw-05-movies' className={styles.btnBack}>
                        <div className={styles.linkContent}>
                            <MdArrowBackIos className={styles.icon} />
                            <span>Go back</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.containerMovies}>
                    <div className={styles.contaonerPosition}>
                        {!movie.poster_path || movie.poster_path === '' ? (
                            <div>No Poster Available</div>
                        ) : (
                            <img
                                src={IMAGE_URL + movie.poster_path}
                                alt={movie.title}
                                className={styles.itemPoster}
                            />
                        )}
                        <p className={styles.posterVote}>{movie.vote_average.toFixed(1)}</p>
                    </div>
                    <div className={styles.containerDetails}>
                        <h2>{movie.title} |{movie.release_date.slice(0,4)}</h2>
                        <p className={styles.description}><span className={styles.overview}>Overview: </span>{movie.overview}</p>
                        <p className={styles.description}><span className={styles.genres}>Genres: </span>{movie.genres.map(genre => genre.name).join(' ')}</p>
                    </div>
                </div>
                <div className={styles.boxInfo}>
                    <h3 className={styles.info}>Additional information</h3>
                    <div className={styles.linksComponents}>
                        <NavLink to='cast' className={styles.link}>Casts</NavLink>
                        <NavLink to='reviews' className={styles.link}>Reviews</NavLink>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default MoviesDetails;