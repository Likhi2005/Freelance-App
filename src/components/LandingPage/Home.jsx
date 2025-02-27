import React from "react";
import Navbar from "../NavBar";
import ResearchPortal from "../../pages/portals";
import Footer from "../footer";

const Home=()=>{
    return(
        <div>
            <Navbar />
            <ResearchPortal />
            <Footer/>
        </div>
    );
}

export default Home;