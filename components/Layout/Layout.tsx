import React from 'react';
import Navbar from "../Navbar/Navbar";
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