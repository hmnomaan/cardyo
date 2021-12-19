import React from 'react';
import './Offer.css'

const Offer = (props) => {
    const { _id, image, name, availability, details, regularPrice, discountedPrice } = props.offer;

    return (
        <div className="offer">
            <div className="col">
                <div className="card h-70">
                    <img src={image} height="280px" width="300px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="duration">{availability}</div>
                        <h5 className="card-title">{name}</h5>
                        <ul className="card-text">
                            {
                                details.map(detail => <li
                                    key={detail}
                                >
                                    <i className="fas fa-check"></i>{detail}</li>)
                            }
                        </ul>

                    </div>
                    <div className="card-footer">
                        <h5> <span>{regularPrice}</span> {discountedPrice} BDT </h5>
                        <hr />
                        <h6 className="text-center btn btn-primary  "><a href="tel:+880-190-928-2807" className="call-button text-white"><i className="fas fa-phone-alt me-2 "></i>Call for Purchase</a></h6>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Offer;