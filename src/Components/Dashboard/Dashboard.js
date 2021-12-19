import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import DashboardHome from './DashboardHome';
import MakeAdmin from './MakeAdmin.js';
import ManageProducts from './ManageProducts.js';
import AddNewPackage from '../AddNewPackage/AddNewPackage.js';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders.js';
import Packages from '../Packages/Packages.js';
import ExploreWatches from '../ExploreWatches/ExploreWatches.js';
import PaymentGateway from '../PaymentGateway/PaymentGateway.js';
import MyOrders from '../MyOrders/MyOrders.js';
import Reviews from '../Reviews/Reviews.js';
import Booking from '../Booking/Booking.js';
import AdminRoute from './AdminRoute.js';
import AdminDashboard from './AdminDashboard.js'

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar /><ul><h4 className="col" >Hi
                {user?.displayName ?
                    <Box>{user?.displayName}</Box> : <Box >{user?.email}</Box>
                },<br /> </h4> <img className="rounded img-thumbnail img-fluid" src={user?.photoURL} alt="N/A" />
                {console.log(user)}</ul>
            <Divider />
            <ul> {!admin && <Box>
        <Link to={`${url}/explore`}><Button color="inherit"> Check Exclusive Watches!</Button></Link>

        <Link to={`${url}/dashboard-home`}><Button color="inherit">Dashboard</Button></Link>

        <Link to={`${url}/payment-gateway`}><Button color="inherit">Payment</Button></Link>
        <Link to={`${url}/my-orders`}><Button color="inherit">My Oders</Button></Link>
        <Link to={`${url}/reviews`}><Button color="inherit">Reviews</Button></Link></Box>}
               
               
               
                {/* admin && */}
                {admin && <Box>
                    <ul>
                        
                        <Link to={`${url}/admin-dashboard`}><Button color="inherit">Admin DashBoard</Button></Link>
                        <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                       <Link to={`${url}/add-a-new-package`}><Button color="inherit">Add New Product</Button></Link>
                       <Link to={`${url}/manage-all-orders`}><Button color="inherit">Manage All Orders</Button></Link>
                        <Link to={`${url}/manage-products`}><Button color="inherit">Manage Products</Button></Link>
                      
                    
                    </ul>
                </Box>}
             {
                    user?.email ?
                        <Box>
                            <Link to={`/`}><Button color="inherit">Back to HomePage</Button></Link>
                            <Button onClick={logOut} color="inherit">Logout</Button>
                        </Box>
                        :
                        <></>
                }
            </ul>
           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={`${path}/dashboard-home`}>
                         <DashboardHome></DashboardHome>
                  
                    </Route>

                    <AdminRoute path={`${path}/admin-dashboard`}><AdminDashboard></AdminDashboard> </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}><MakeAdmin></MakeAdmin></AdminRoute>
                    <AdminRoute path={`${path}/manage-products`}><ManageProducts></ManageProducts></AdminRoute>
                    <AdminRoute path={`${path}/add-a-new-package`}><AddNewPackage></AddNewPackage> </AdminRoute>
                    <AdminRoute path={`${path}/manage-all-orders`}><ManageAllOrders></ManageAllOrders> </AdminRoute>
                    <Route path={`${path}/explore`}><ExploreWatches></ExploreWatches> </Route>
                    <Route path={`${path}/payment-gateway`}>
                        <PaymentGateway></PaymentGateway>
                    </Route>
                    <Route path={`${path}/my-orders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                       <Reviews></Reviews>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;