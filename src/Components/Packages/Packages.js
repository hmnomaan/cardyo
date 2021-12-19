import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Package from './Package/Package';


const Packages = () => {

    const [packages, setPackages] = useState([]);
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    //  ----------------    Get All Packages Details   ---------------
    useEffect(() => {
        fetch('https://morning-coast-54846.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setIsLoading(false);
            });
    }, []);



    //  ----------------    Handle Book Now On Click  ---------------
    const handleBookNowClick = id => {
        history.push(`/booking/${id}`);
    }

    return (
        <div className="packages my-5 container">
            <h2 className="text-center py-3">Watch Collections</h2>
            <p className="text-muted text-center">We Provide Best Watches In the World. Try Our Products.</p>
            {
                isLoading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {

                                //  ----------------    Display All Products   ---------------
                                packages?.map(_package => <Package
                                    key={_package._id}
                                    handleBookNowClick={handleBookNowClick}
                                    _package={_package}
                                >
                                </Package>).slice(0, 6)
                            }


                        </div>

                    )
            }
            <div className=" text-center mt-3"><button className=" btn bg-primary p-3 border  rounded " ><Link to={`/explore`} className="text-white p-3 ">Explore</Link></button></div>

        </div >
    );
};

export default Packages;