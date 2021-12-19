import React from 'react';
import ReactStars from 'react-stars';
import './ViewReview.css'

const ViewReview = (props) => {
     const { comment, rating, displayName } = props.review;

    const ratingStars = {        
        size: 30,
        value: parseInt(rating),
        edit: false
      };
    return (
         <div className="review mx-auto">
            <div className="col h-100 text-center">
                <div className="card h-100 py-3">
                    <div className="card-body text-center">
                        <q>{comment}</q>
                        <ReactStars {...ratingStars}/>
                    </div>
                    <div className="card-footer text-center">
                        <h6 className="px-2">{displayName} </h6>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ViewReview;