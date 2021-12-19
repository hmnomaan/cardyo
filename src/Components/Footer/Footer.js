import React from 'react';
import './Footer.css';
import logo from '../../Images/logo.png'
import {  NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';

const Footer = () => {
    return (
        <div className="footer mt-3 m-0">
            <div className="container  ">
                <div className="row">

                    {/* ---------  Column 1  ------------ */}
                    <div className="col-md-4 col-12 p-3">
                        <div className="d-flex aulgn-items-center">
                            <img className="footer-logo" src={logo} alt="" />
                            <h5 className="ms-2 mb-0 mt-1">WatchPlanet</h5>
                        </div>
                        <p className="mission pe-lg-3 fs-6 pt-1">
                            We provide attractive Watchess In the World. We have Quaulty Watches. You should check It out.
                        </p>
                    </div>

                    {/* ---------  Column 2  ------------ */}
                    <div className="col-md-4 col-12 ps-md-5 p-3 text-decoration-none">
                      <ul > <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
                            <Button color="inherit">Home</Button>
                        </NavLink></ul>
                       <ul> <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
                            <Button color="inherit">About</Button>
                        </NavLink></ul>
                       <ul> <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                            <Button color="inherit">ExploreMore</Button>
                        </NavLink></ul>
                       <ul> <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/offers">
                            <Button color="inherit">Offers</Button>
                        </NavLink></ul>
                       <ul> <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/contact">
                            <Button color="inherit">Contact</Button>
                        </NavLink> </ul>

                </div>
                   
                    <div className="col-md-4 col-12 p-3">
                        <p>Want to hear from us?</p>
                        <input type="email" className="w-100 px-2" placeholder="Your email address" />
                        <button className="btn btn-light mt-3">Subscribe</button>
                    </div>
                </div>
                <div className="row">
                    <p className="mb-0 text-center">&copy;All Rights Reserved 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;