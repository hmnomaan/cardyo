import React from 'react';
import { Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect';
import './Banner.css'
import moneyBack from '../../assets/images/banner/promise1.png'

import safePurchase from '../../assets/images/promise section/secure-pay.png'
import warranty from '../../assets/images/promise section/1year-warranty.png'
import everydayService from '../../assets/images/promise section/24hour-service.png'
// import slide1 from '../../assets/Slider/1-2021-Audi-A4.jpg'
// import slide2 from '../../assets/Slider/2-BMW.jpg'

import slide3 from '../../assets/cars/11-watch.jpg'

const Banner = () => {

   

   
    return (
        <div >
            <div className=" hero-section  col row-cols-1 row-cols-md-1 ">

               <div className="mt-2"> <div className='hero-type container mt-1 ' >
                    <h2 className='text-white'>Are You Looking For Wacth? Explore Now<span className=' text-white '>{
                    
                    <Typewriter
  options={{
    strings: ['Rolax Watch','Apple Watch','Samsung','Google','Quality Parts','Branded Watch'],
    autoStart: true,
    loop: true,
    
  }}
/>
                    }</span></h2>
                    
                    <button className='btn btn-primary  px-5 py-2 '><Link className="text-white text-decoration-none fw-bolder " to="/explore">Dive In</Link> </button>
</div></div>


            </div>
            {/* what we promise */}
            <div className='mt-4  row  mx-5 justify-content-center '>
                <div className="container promise-section ">
  <div className="row g-2  row-cols-1 row-cols-md-2 row-cols-lg-4 ">
    <div className="col ">
                            <div className="card bg-dark bg-opacity-10" >
                                <div className=''>

                                     <div>
                                    
  <img style={{width:"63px"}}  src={moneyBack} className="card-img-top mt-3" alt="..."/></div>
  <div className="card-body">
    <h5 className="card-title mt-2">Money Back Guarantee</h5>
    <small className="card-text">We give their money back.based on satisfaction</small>
  </div>

                                </div>
                               
</div>
    </div>
    <div className="col">
      <div className="card bg-dark bg-opacity-10" >
  
                    
                                
                                <div className=''>   <div><img style={{width:"73px"}} src={safePurchase} className="card-img-top m-2" alt="..." /></div><div className="card-body">
                                    <h5 className="card-title">Purchase Safely with us.</h5>
                                    <small className="card-text">We Guarantee safe transaction. 100% safe.</small>
  
  </div></div>
  
</div> 
                        </div>
                      
    <div className="col">
     <div className="card bg-dark bg-opacity-10" >
  <div className=''><div><img  style={{width:"118px"}} src={warranty} className="card-img-top m-1" alt="..."/></div><div className="card-body">
    <h5 className="card-title">1year warranty</h5>
     <small className="card-text">We Guarantee safe transaction. 100% safe.</small>
  </div></div>
  
</div>
           
 </div>
    <div className="col ">
     <div className="card  bg-dark bg-opacity-10" >
  <div className=''><div><img  style={{width:"70px"}}  src={everydayService} className=" mt-2  card-img-top" alt="..."/></div><div className="card-body">
    <h5 className="card-title mt-2">Services Available 24hrs</h5> <small className="card-text">We Guarantee safe transaction. 100% safe.</small>
    
  </div></div>
  
</div>
           
 </div>
    </div>
  </div>
            </div>




            {/* showing good quality */}

             {/* first showup */}
            <div className='container d-flex justify-content-center mt-5 row g-2  row-cols-1 row-cols-md-2 mx-auto '>
                <div><img width="550px" className=' img-fluid' src={slide3} alt="" /></div>
                <div ><h3 style={{ marginTop: "150px" }} className='mx-5 mt-5 '>We Provide Quality Product See  <br />Our New Collection from Apple</h3>
                    <div className="mx-5 mt-5"><small>check this watch out , click here.</small><br />
                        <p>Every influencer liking this gig. so why not you? Hurry Up!</p>
                <button className='btn btn-primary'><Link className="text-white text-decoration-none fw-bolder " to="/explore">See More</Link></button></div>
                
                </div>
                



            </div>

           
            {/* offer section */}
            <div className='bg-success p-4 mt-5 d-flex  justify-content-center '> <div><h2 className='text-white row row-md-6 row-sm-12'>50 Years of Glory! Get Up to 50% Discount!!! </h2><button className='btn btn-warning text-white px-3'><Link className="text-white text-decoration-none fw-bolder " to="/offers">Buy Now!</Link></button></div> 
            </div>
        </div>
    );
};

export default Banner;