import React from "react";
import CollectionsSection from "./CollectionsSection/CollectionsSection";
import Header from "./Header/Header";
import HeroSection from "./Hero-Section/HeroSection";
import Modal from "./Modal/Modal";
import NoBottomSection from "./noBottom-section/NoBottomSection";
import TextSection from "./TextSection/TextSection";
import Footer from "./Footer/Footer";

function Home() {
  return (
      <div id="wrapper">
        <Header />
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
          {/* <HeroSection /> */}
          {/* <NoBottomSection /> */}
          <CollectionsSection />
          {/* <TextSection /> */}
        </div>
        <Modal />
        <a href="/" id="back-to-top"></a>
        <Footer />
      </div>
  );
}

export default Home;
