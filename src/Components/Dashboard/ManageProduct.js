import React from 'react';
import '../Packages/Package/Package.css'


const ManageProduct = (props) => {
    const { _id, image, name, availability, price } = props.packages;
    const {  handleDeleteUser } = props;
    return (
        <div className="package">
            <div className="col">
                <div className="card h-60">
                    <img src={image} height="250px" width="300px" className=" card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="duration">{availability}</div>
                        <h5 className="card-title">{name}</h5>
                    </div>
                    <div className="card-footer">
                        <h5 className="px-2"> {price} BDT </h5>
                        <button onClick={() =>  handleDeleteUser(_id)} className="w-100 btn btn-book-now bg-danger text-white">Delete</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ManageProduct;

// 

//  <button onClick={() => handleDeleteUser(packages._id)}>X</button>
// import React from 'react';

// const ManageProduct = () => {
//     return (
//         <div>
//           <h2>  single product</h2>
//         </div>
//     );
// };

// export default ManageProduct;