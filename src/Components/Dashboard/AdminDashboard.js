import * as React from 'react';
import Grid from '@mui/material/Grid';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Reviews from '../Reviews/Reviews';
import AddNewPackage from '../AddNewPackage/AddNewPackage.js';
import ViewReviews from '../Reviews/ViewReviews/ViewReviews.js';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <ManageAllOrders
                   
                ></ManageAllOrders>
            </Grid>
            <Grid item xs={12} sm={8}>
                <AddNewPackage></AddNewPackage>
                <Grid item xs={12} sm={12} md={12} container
                ><ViewReviews ></ViewReviews></Grid>
                
            </Grid>
        </Grid>
    );
};

export default DashboardHome;