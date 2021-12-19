import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import ManageProduct from './ManageProduct.js';

const ManageProducts = () => {
    const [packages, setPackages] = useState([]);
   
    useEffect(() => {
        fetch('https://morning-coast-54846.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    // DELETE A  Product
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://morning-coast-54846.herokuapp.com/packages/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => { 
                    if (data.deletedCount > 0) {
                       alert('deleted successfully');
                        const remainingProducts = packages.filter(packages => packages._id !== id);
                       
                        setPackages(remainingProducts);
                       
                    }
                });
        }
    }

    return (
        <div className="text-center mt-5 container col">
            <h2> Products Available: {packages.length} </h2>
           
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                   {         
                    packages.map(packages => <ManageProduct 
                        handleDeleteUser={handleDeleteUser}
                        key={packages._id}
                        packages={packages}
                    ></ManageProduct>)
                }</div>
        </div>
    );
};

export default ManageProducts;
