import './App.css'
import Header from './Components/Header/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
// import Packages from './Components/Packages/Packages';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';
import Success from './Components/Booking/Success/Success';
import MyOrders from './Components/MyOrders/MyOrders';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';
import Contact from './Components/Contact/Contact';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Offers from './Components/Offers/Offers';
import ExploreWatches from './Components/ExploreWatches/ExploreWatches';
import PaymentGateway from './Components/PaymentGateway/PaymentGateway';
import Dashboard from './Components/Dashboard/Dashboard';
import Reviews from './Components/Reviews/Reviews';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import AdminRoute from './Components/Dashboard/AdminRoute';
import ManageProducts from './Components/Dashboard/ManageProducts';
import AdminDashboard from './Components/Dashboard/AdminDashboard.js'
import DashboardHome from './Components/Dashboard/AdminDashboard.js';

function App() {
  return (
    <AuthProvider>
      <div className="app">

        <Router>

          <Switch>
            <Route path="/login">
              <Header></Header>
              <Login /><Footer></Footer>
            </Route>
            <Route path="/register">
              <Header></Header>
              <Register></Register><Footer></Footer>
            </Route>
            <Route path="/explore">
              <Header></Header>
              <ExploreWatches></ExploreWatches><Footer></Footer>
            </Route>
            <Route path="/offers">
              <Header></Header>
              <Offers></Offers><Footer></Footer>
            </Route>
            <PrivateRoute path="/booking/:packageId">
              <Header></Header>
              <Booking></Booking><Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
<PrivateRoute path="/dashboard-home" ><DashboardHome></DashboardHome></PrivateRoute>


            <PrivateRoute path="/bookingSuccessful"><Header></Header>
              <Success></Success><Footer></Footer>
            </PrivateRoute>

            <PrivateRoute path="/payment-gateway">
              <Header></Header>
              <PaymentGateway></PaymentGateway><Footer></Footer>
            </PrivateRoute>

            <PrivateRoute path="/my-orders"><Header></Header>
              <MyOrders></MyOrders><Footer></Footer>
            </PrivateRoute>
            <AdminRoute path="/add-a-new-package">
              <AddNewPackage></AddNewPackage><Footer></Footer>
            </AdminRoute>
            <AdminRoute path="/manage-all-orders">
              <ManageAllOrders></ManageAllOrders><Footer></Footer>
            </AdminRoute>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/admin-dashboard">
              <AdminDashboard></AdminDashboard>
            </AdminRoute>
            <AdminRoute path="/manage-products"><Header></Header>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          
            <Route path="/contact"><Header></Header>
              <Contact></Contact><Footer></Footer>
            </Route>
            <Route path="/about"><Header></Header>
              <About></About><Footer></Footer>
            </Route>
            <Route exact path="/"><Header></Header>
              <Home></Home><Footer></Footer>
            </Route>
            <Route path="/reviews"><Header></Header>
              <Reviews></Reviews> <Footer></Footer>           </Route>
            <Route path="/home"><Header></Header>
              <Home></Home><Footer></Footer>
            </Route>
            <Route path="*"><Header></Header>
              <NotFound></NotFound><Footer></Footer>
            </Route>
          </Switch>
        </Router>

      </div>
    </AuthProvider>
  );
}

export default App;
