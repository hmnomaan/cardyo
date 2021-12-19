import React, { useEffect, useState } from 'react';
import ViewReview from './ViewReview.js';

const ViewReviews = () => {
    const [review, setReview] = useState([])
    
useEffect(() => {
    fetch(`https://morning-coast-54846.herokuapp.com/review`)
        .then(res => res.json())
        .then(data => setReview(data))
}, [])

    return (
        <div className="text-center container col">
                        
            <div className="container py-5">
                <h2 className="text-center my-5">Customer Reviews</h2>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
                    {
                        review?.map(review => <ViewReview
                            key={review._id}
                            review={review}                           
                        ></ViewReview>)
                    }
                </div>
            </div>
        </div>

    );
};

export default ViewReviews;