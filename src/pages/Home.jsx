import React from "react";
import Header from "../component/Header";
import hero from "../assets/img/superior.jpg";

const Home = () => {
  return (
    <>
      <div>
        <Header />

        <img src={hero} alt="logo"></img>
        <h1>HOME</h1>
      </div>
    </>
  );
};

export default Home;
