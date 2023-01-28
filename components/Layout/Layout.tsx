import React from 'react';
import Navbar from "../Navbar/NavBar";
const Layout: React.FC = ({ children }) =>{
    return (
        <>
            {/* navbar Component */}
            <Navbar />
            <main>{ children }</main>
        </>
    )
}

export default Layout;