import React, { useState } from 'react';
// Import the logo image 
import logotoggler from "../../../assets/images/icons/icon-bar.png";
import newLoago2 from "../../../assets/images/Screenshot2.png";
// Import the auth hook 
import { useAuth } from "../../../Contexts/AuthContext";
import loginService from "../../../services/login.service";
import { Link } from 'react-router-dom';


function Header(props) {
  // Use the auth hook to get the current context 
  // Checks if the user is logged in and if the user is an admin 
  console.log(useAuth()); // Check if context is working 
  const { isLogged, setIsLogged, employee } = useAuth();
   const [showRoutes, setShowRoutes] = useState(false);

     const toggleRoutes = () => {
       setShowRoutes(!showRoutes);
     };



    const logOut = () => {
      // Call the logout function from the login service
      loginService.logOut();
      // Set the isLogged state to false
      setIsLogged(false);
    };

  return (
    <div>
      <header class="main-header header-style-one">
        <div class="header-top">
          <div class="auto-container">
            <div class="inner-container">
              <div class="left-column">
                <div class="text">All Star Auto Care</div>
                {/* <div class="office-hour">Monday - Saturday 7:00AM - 6:00PM</div> */}
              </div>
              <div class="right-column">
                {isLogged ? (
                  <div className="link-btn">
                    <div className="phone-number">
                      <strong>Welcome {employee?.employee_first_name}</strong>
                    </div>
                  </div>
                ) : (
                  <div className="phone-number">
                    Schedule Appointment: <strong>1800 456 7890 </strong>{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div class="header-upper">
          <div class="auto-container">
            <div class="inner-container">
              <div class="logo-box">
                <div class="logo">
                  <Link to="/">
                    <img src={newLoago2} alt="" />
                  </Link>
                </div>
                <div className="toggleWrapper">
                  <img src={logotoggler} onClick={toggleRoutes} alt="" />
                  {showRoutes && (
                    <div className="menuList">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/offerservice">Services</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        {isLogged ? (
                          <>
                            <div>
                              <Link to="/dashboard">Dashboard</Link>
                            </div>
                            <div>
                              <Link to="/" onClick={logOut}>
                                Log out
                              </Link>
                            </div>
                          </>
                        ) : (
                          <div>
                            <Link to="/login">Login</Link>
                          </div>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div class="right-column">
                <div class="nav-outer">
                  <nav class="main-menu navbar-expand-md navbar-light">
                    <div
                      class="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul class="navigation">
                        <li class="dropdown">
                          <Link to="/">Home</Link>
                        </li>
                        <li class="dropdown">
                          <Link to="/about">About Us</Link>
                        </li>
                        <li class="dropdown">
                          <Link to="/offerservice">Services</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        {isLogged && (
                          <li>
                            <Link to="/dashboard">Dashboard</Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="search-btn"></div>
                <div class="link-btn">
                  {isLogged ? (
                    <div className="link-btn">
                      <Link
                        to="/"
                        className="theme-btn btn-style-one blue"
                        onClick={logOut}
                      >
                        Log out
                      </Link>
                    </div>
                  ) : (
                    <div className="link-btn">
                      <Link to="/login" className="theme-btn btn-style-one">
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sticky-header">
          <div class="header-upper">
            <div class="auto-container">
              <div class="inner-container">
                <div class="logo-box">
                  <div class="logo">
                    <a href="/"></a>
                  </div>
                </div>
                <div class="right-column">
                  <div class="nav-outer">
                    <div class="mobile-nav-toggler"></div>

                    <nav class="main-menu navbar-expand-md navbar-light"></nav>
                  </div>
                  <div class="search-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-menu">
          <div class="menu-backdrop"></div>
          <div class="close-btn">
            <span class="icon flaticon-remove"></span>
          </div>

          <nav class="menu-box">
            <div class="nav-logo">
              <a href="index.html"></a>
            </div>
            <div class="menu-outer"></div>
          </nav>
        </div>

        <div class="nav-overlay">
          <div class="cursor"></div>
          <div class="cursor-follower"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;