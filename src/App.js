// Import react 
import React from 'react';
// Import the Routes and Route components from react-router 
import { Routes, Route } from "react-router";
// Import the page components 
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import AddEmployee from './markup/pages/admin/AddEmployee';
import AddCustomer from './markup/pages/admin/AddCustomer';
import Unauthorized from "./markup/pages/Unauthorized";
// Import the Orders and Customers components 
import Customers from './markup/pages/admin/Customers';
// // Import the Employees component 
import Employees from './markup/pages/admin/Employees';
import Services from './markup/pages/admin/Services';
import UpdateServicePage from './markup/pages/admin/UpdateServicePage';
import UpdateEmployeePage from './markup/pages/admin/UpdateEmployeePage';
import UpdateCustomerPage from './markup/pages/admin/UpdateCustomerPage';
import UpdateOrderPage from './markup/pages/admin/UpdateOrderPage';
import CustomerProfilePage from './markup/pages/admin/CustomerProfilePage';
import OrderPage from './markup/pages/admin/OrderPage';
import OrdersPage from './markup/pages/admin/OrdersPage';
import OrderDetailPge from './markup/pages/admin/OrderDetailPge';
import ProfilePage from './markup/pages/admin/ProfilePage';
import DashboardPage from './markup/pages/admin/DashboardPage';
// Import the css files 
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";

// Import the custom css file 
import "./assets/styles/custom.css";

// Import the Header component 
import Header from './markup/components/Header/Header';
// Import the Footer component
import Footer from './markup/components/Footer/Footer';

//other displays
import { ToastContainer } from "react-toastify";

// Import the PrivateAuthRoute component 
import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute';
import About from './markup/pages/About';
import Service from './markup/pages/Service';
import Contact from './markup/pages/Contact';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offerservice" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin/add-employee" element={<AddEmployee />} /> */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* // Add the Orders Route  */}
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <OrdersPage />
            </PrivateAuthRoute>
          }
        />
        {/* // Add the add-employee Route  */}
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />
        {/* // Add the add-employee Route  */}
        <Route
          path="/admin/services"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Services />
            </PrivateAuthRoute>
          }
        />

        {/* // Add the add-Customer Route  */}
        <Route
          path="/admin/add-customer"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <AddCustomer />
            </PrivateAuthRoute>
          }
        />

        {/* // Add the Customers Route  */}
        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />
        <Route path="/admin/employees" element={<Employees />} />
        <Route
          path="/update-service/:serviceId"
          element={<UpdateServicePage />}
        />
        <Route
          path="/update-employee/:employee_id"
          element={<UpdateEmployeePage />}
        />
        <Route
          path="/update-customer/:customer_id"
          element={<UpdateCustomerPage />}
        />
        <Route
          path="/customer-profile/:customer_id"
          element={<CustomerProfilePage />}
        />
        {/* order routes */}
        <Route path="/admin/order" element={<OrderPage />} />
        {/* order detail */}
        <Route path="/admin/order/detail/:hash" element={<OrderDetailPge />} />

        <Route
          path="/admin/order/update_order/:hash"
          element={<UpdateOrderPage />}
        />
        <Route
          path="/admin/Profile"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <ProfilePage />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <DashboardPage />
            </PrivateAuthRoute>
          }
        />
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
