import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import BookedImage from '../../../Images/booking.jpg';

const Success = () => {
    const [success, setSuccess] = useState([]);
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    //  ----------------    Get All Packages Details   ---------------
    useEffect(() => {
        fetch('https://morning-coast-54846.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setSuccess(data);
                setIsLoading(false);
            });
    }, []);



    //  ----------------    Handle payment Now On Click  ---------------


    return (
        <div className="container text-center my-5">
            <h1>Your Order Placement is Successful!</h1>
            <h4>Thank for Staying with WatchPlanet</h4>
            <p>Please check your email, our customer represitive will contact you soon for schedule and payment.</p>
            <img className="img-fluid p-4" src={BookedImage} alt="" />
            <div>

                <button ><Link className="btn text-decoration-none text-white bg-success" to="/payment-gateway"> Confirm Payment</Link></button>
            </div>
        </div>
    );
};

export default Success;