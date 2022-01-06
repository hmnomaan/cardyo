import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import Logo from '../../Images/logo.png';
import useAuth from '../../Hooks/useAuth';
import Button from '@mui/material/Button';


const Header = () => {
    // ----------- Authentication Info --------
    const { admin, user , logOut} = useAuth();

    // ----------- Navigation --------
    
    return (
<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container text-white">
                    <NavLink className="navbar-brand fw-bold fs-3 text-white" to="/">
                        <img height="60px" className="py-2 navbar-logo " src={Logo} alt="" />
                         <span className='px-2 text-info'> Wacth</span>PLANET</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav fw mx-auto ">
                            <NavLink className="nav-link text-white" to="/"><i className="fas fa-home me-1"></i>Home</NavLink>
                            <NavLink className="nav-link text-white" to="/explore">Explore</NavLink>
                            <NavLink className="nav-link text-white" to="/offers">Offers</NavLink>
                            <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                        </div>                        
                    </div>
                    <div>
                            {
                                user?.email ? (
                                <div className="d-flex align-items-center">
                                    {/* check if user not an admin */}
                                    {!admin && <div className="d-flex align-items-center "><NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/dashboard-home">
                                        <Button color="inherit">Dashboard</Button>
                                        
                                    </NavLink><div><button className="btn bg-warning nav-link bg-white text-dark" onClick={logOut}><i className="fas fa-sign-out-alt me-1"></i>LogOut</button></div></div>
                                    }
                            {/* checks if user admin */}
                                    {admin &&
                                    <div className="d-flex align-items-center ">
                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="dashboard/admin-dashboard">
                                            <Button color="inherit">AdminDashboard</Button>
                                        </NavLink>
                                       <div>
                                            <button className="btn nav-link bg-white text-dark" onClick={logOut}><i className="fas fa-sign-out-alt me-1"></i>LogOut</button>
                                    </div>
                                    
                                    </div>
                                        
                                    }
                                    </div>

                                )
                                    :
                                    (
                                        <NavLink className="nav-link bg-primary text-white rounded px-3" to="/login"><i class="fas fa-user me-1"></i>Login</NavLink>
                                    )
                            }

                        </div>
                </div>
            </nav>
        </div>


        

    );
};

export default Header;
