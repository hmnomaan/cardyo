
import './Reviews.css'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase.js";
import StarRatings from 'react-star-ratings';
import useAuth from '../../Hooks/useAuth.js';

const Reviews = () => {
  //   const { register, handleSubmit, watch, errors } = useForm();


  //   const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);
  // const { user } = useFirebase();
  // const onSubmit = (data) => {
  //   fetch('https://morning-coast-54846.herokuapp.com/review', {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log(result));

    
  // };

const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    // ----------------------   Handle Form On Submit    ----------------------- 
    const onSubmit = data => {
        // ----------------------   Get Form data and add status   -----------------------
        const formData = data;
        formData.email = user.email;
        formData.displayName = user?.displayName;

        // ----------------------   Send Form Data to Server    -----------------------
        fetch('https://morning-coast-54846.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('Your review has posted successfully');
                    reset();
                }
                else {
                    alert('Error Occurred!');
                }
            });
    }



  return (
     <div className="give-review py-3">
            <h2 className="text-center mb-4">Give Review</h2>
            <div className="d-flex justify-content-center">
                <form style={{width:'350px'}} onSubmit={handleSubmit(onSubmit)}>

                    {/* -----------------   Full Name    --------------- */}
                    <div className="mb-3">
                        <label className="form-label">Your Comment</label>
                        <textarea type="text" className="form-control" {...register("comment", { required: true })} />
                        <p className="text-danger">{errors.comment?.type === 'required' && "Comment is required"}</p>
                    </div>


                    {/* -----------------   Feedback Options    --------------- */}
                    <div className="mb-3">
                        <label className="form-label">Select Your Feedback </label>
                        <select className="form-control" {...register("rating", { required: true })}>
                            <option value="5" >Very Satisfied (5 Star)</option>
                            <option value="4">Satisfied (4 Star)</option>
                            <option value="3">Neutral (3 Star)</option>
                            <option value="2">Disappointed (2 Star)</option>
                            <option value="1">Very Disappointed (1 Star)</option>
                        </select>
                    </div>

                    {/* -----------------   Submit    --------------- */}
                    <input className="btn btn-success" type="submit" value="Post Review" />
                </form>
            </div>
        </div >
  );
};

export default Reviews;