import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
    return (
        <div className="Layout">
            <Header />
            <Content>{children}</Content>
            <Footer />
        </div>
    );
};
export default Layout;






