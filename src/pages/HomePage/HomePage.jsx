import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css'
import PostersMovies from "components/PostersMovies/PostersMovies";
import { getTrendingMovies} from 'helpers/api';
import Spinner from 'components/Spinner/Spinner';

 const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getTrendingMovies()
        .then(response => {
            console.log("Movies response:", response);
            if (response && response.results) {
                console.log("Movies:", response.results);
                setMovies(response.results);
            } else {
                console.error("No movies found in response");
            }
            setIsLoading(false)
        })
        .catch(error => {
            console.error("Error fetching trending movies:", error);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className={styles.containerHome}>
             <div className= {styles.containerBox}>
            <div className={styles.titleBox}>
            <h1 className={styles.title}>Trending today</h1>
            </div>
        </div>
        {isLoading ? <Spinner/> :  <PostersMovies movies={movies} context="" />}
        </div>
       
    )
};

export default HomePage;