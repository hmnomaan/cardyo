import * as React from 'react';
import Grid from '@mui/material/Grid';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Booking from '../Booking/Booking';
import Offers from '../Offers/Offers';
import Reviews from '../Reviews/Reviews';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <MyOrders
                    date={date}
                    setDate={setDate}
                ></MyOrders>
            </Grid>
            <Grid item xs={12} sm={8}>
               
                    <Offers date={date}></Offers>
              
                <Reviews></Reviews>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;