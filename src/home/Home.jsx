import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Free from "../components/free";
// import Course from "./components/Course";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Free></Free>
      <Footer></Footer>
    </>
  );
};

export default Home;
