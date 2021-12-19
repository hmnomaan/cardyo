import React from 'react';
import './About.css'
import AboutImage from '../../Images/about.jpg';

const About = () => {
    return (
        // ----------------------   About Section    -----------------------
        <div className="about my-5 container">
            <h1 className="text-center">About Us</h1>
            <p className="about-text px-3">The Watch Business Growing Day By Day.  <div className="text-center">
                    <img className="img-fluid " src={AboutImage} alt="" />
                </div>
               Welcome to Our Shop.  Look and see! Enjoy Good Qualities</p>

            {/* // ----------------------   About Section Image    ----------------------- */}
            <div className="text-center">
                <img className="img-fluid " src={AboutImage} alt="" />
            </div>
            <p className="about-text px-3">High-quality offers, a good quality-price ratio and the best service are the cornerstones of our constantly growing company.
                 We constantly strive to provide our clients with a perfect service and, thanks to our 16 affiliates,
                we can also act on site and thus guarantee the quality of our offers. Flexibility, friendliness and well thought-out offers
                from charter to coach tours are the strengths of our company.
            </p>
        </div>
    );
};

export default About;