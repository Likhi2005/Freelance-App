import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">

            <div className="container">



                {/* Logo */}
                <Link to="/" className="navbar-brand d-flex align-items-start">
                    <img src={logo} alt="FlexGigs" style={{ height: "40px" }} />
                </Link>



                {/* Navbar Items */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* Hire Freelancers Dropdown */}
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="hireDropdown" role="button" data-bs-toggle="dropdown">
                                Hire Freelancers
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Browse Freelancers</Link></li>
                                <li><Link className="dropdown-item" to="#">Post a Job</Link></li>
                            </ul>
                        </li>

                        {/* Find Work Dropdown */}
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="workDropdown" role="button" data-bs-toggle="dropdown">
                                Find Work
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Browse Jobs</Link></li>
                                <li><Link className="dropdown-item" to="#">Freelancer Membership</Link></li>
                            </ul>
                        </li>

                        {/* Solutions Dropdown */}
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="solutionsDropdown" role="button" data-bs-toggle="dropdown">
                                Solutions
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Enterprise</Link></li>
                                <li><Link className="dropdown-item" to="#">Local Jobs</Link></li>
                            </ul>
                        </li>
                    </ul>

                </div>
                {/* end of main nav bar left side */}



                {/* Right Side */}
                <div className="d-flex">


                    <Link to="/login" className="nav-link text-white px-3 py-2 rounded">Log In</Link>
                    <Link to="/signup" className="nav-link text-white px-3 py-2 rounded">Sign Up</Link>



                    {/* Post a Project (Visible only on large screens) */}
                    <Link
                        to="/post-project"
                        className="btn btn-primary fw-bold d-none d-lg-inline"
                        style={{ backgroundColor: "#ff087f", border: "none" }}
                    >
                        Post a Project
                    </Link>



                    {/* Mobile Menu Button */}
                    <button className="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                </div>
                {/* end of righjt side nav bar */}



            </div>
            {/* end of container */}





        </nav>
    );
}














// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";

// export default function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
//             <div className="container">

//                 {/* Logo */}
//                 <div>
//                     <Link to="/" className="navbar-brand d-flex align-items-center">
//                         <img src={logo} alt="FlexGigs" style={{height:"40px"}} />
//                     </Link>
//                 </div>

//                 {/* Navbar Items */}
//                 <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
//                     <Link to="#" className="nav-link dropdown-toggle">Hire Freelancer</Link>
//                     <Link to="#" className="">Find Work</Link>
//                     <Link to="/login" className="">Log In</Link>
//                     <Link to="/signup" className="">
//                         Sign Up
//                     </Link>
//                 </div>

//                 {/* Mobile Menu Button (Optional) */}
//                 <button className="">
//                     ☰
//                 </button>
//             </div>
//         </nav>
//     );
// }
