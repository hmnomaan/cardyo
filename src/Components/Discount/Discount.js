import React from 'react';
import './Discount.css'
import Sale from '../../Images/sale.png';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div className="discount">
            <div className="container">
                <div className="row">

                    {/* // -----------------   Discount Text   --------------- */}
                    <div className="col-md-6 col-12 p-5 d-flex align-items-center">
                        <div>
                            <h1 className="title"> Biggest <span>Black Friday</span> Shopping day is on the way!</h1>
                            <h4>Check our website and get attractive discount upto 70%!</h4>
                            <Link className="btn btn-success px-4 mt-3" to="/offers">View All Offers</Link>
                        </div>
                    </div> {/* -----------------   Discount Image   --------------- */}
                    <div className="col-md-6 col-12">
                        <img className="img-fluid p-5" src={Sale} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Discount;