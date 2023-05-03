import ScrollToTop from "react-scroll-to-top";
import Footer from "./footer";
import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollToTop smooth />
      <Footer />
    </>
  );
}
