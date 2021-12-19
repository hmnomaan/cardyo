import React from 'react';

import useAuth from '../../Hooks/useAuth';
import './PaymentGateway.css'
import imagePayment from '../../Images/payment.png'
const PaymentGateway = () => {
    const { user, isLoading } = useAuth();
  

    return (
        <div className="container ">

            {isLoading ? (
                <> <div className="mx-auto text-center">
                    <div className="spinner-border text-primary text-center" role="status">
                        <span className="visually-hidden  ">Loading...</span>
                    </div>
                </div></>
            ) : (<><h2 className="mt-5 row col-12 col-md-6 col-sm-6 mx-auto  mb-5">Howdy!, {user?.displayName}..&#128522; <br /> <br /> Payment System Coming soon!</h2>

                <br />
                <img className=" row col-12 col-md-6 col-sm-6 img-fluid mx-auto mb-5" src={imagePayment} alt="" />

            </>
            )



            } <br /> <br /> <br /> <br />

        </div>
    );
};

export default PaymentGateway;