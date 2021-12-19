import React, { useEffect, useState } from 'react';
import './ManageOrder.css'

const ManageOrder = (props) => {
    const { _id, name, address, thana, district, packageId, payment, status } = props.order;
    const { handleCancelBookingButton, handleApproveButton } = props;
    const [_package, setPackage] = useState({});

    //----------------    Get Order Details    ---------------
    useEffect(() => {
        fetch(`https://morning-coast-54846.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackage(data));
    }, []);

    return (
        <div className="manage-order px-4 py-3 my-4">
            <div className="row">
                {/* ----------------    Package Details    --------------- */}
                <div className="col-md-6 col-12 my-2 d-flex flex-column flex-md-row align-items-center">
                    <div>
                        <img className="img-fluid package-image me-2 mb-3 mb-md-0" src={_package?.image} alt="" />
                    </div>
                    <div className="ps-2">
                        <h4>{_package?.name}</h4>
                        <h6>Availability: {_package?.availability}</h6>
                        <h6>Price: {_package?.price}</h6>
                        <h6>Status: {status}</h6>
                    </div>
                </div>

                {/* ----------------    Billing Information and Buttons    --------------- */}
                <div className="col-md-6 col-12 my-2">
                    <h5>Billing Information</h5>
                    <p className="mb-0">Name: {name}</p>
                    <p className="mb-0">Address: {`${address}, ${thana}, ${district}.`}</p>
                    <p className="mb-0">Payment: {payment}</p>
                    <button onClick={() => handleCancelBookingButton(_id)} className="btn btn-danger mt-1 me-2">Delete</button>
                    {
                        (status === "pending") ? (
                            <button onClick={() => handleApproveButton(_id)} className="btn btn-success mt-1">Shipment Completed</button>
                        )
                            : (
                                <></>
                            )
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageOrder;