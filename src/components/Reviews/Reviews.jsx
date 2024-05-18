import React, { useEffect, useState } from "react";
import styles from './Reviews.module.css'
import { useParams } from "react-router-dom";
import { getMoviesReviews } from "helpers/api";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();
    useEffect(() => {
        getMoviesReviews(movieId)
        .then(response => {
            console.log("Reviews:", response)
            setReviews(response.results)
        })
    }, [movieId])
    return(
        <>
        {
            reviews.length > 0 ?
            <ul className={styles.containerReviews}>
            {
                reviews.map(review => (
                    <li key={review.id} className={styles.itemsReviews}>
                        <p className={styles.detailsReview}><span className={styles.userName}>Username:</span>{review.author_details.username}</p>
                        <p className={styles.content}>{review.content}</p>
                    </li>
                ))
            }
        </ul>
        :
        <h3 className={styles.defaultReviews}>No reviews found</h3>
        }
        
        </>
    )
}
export default Reviews;