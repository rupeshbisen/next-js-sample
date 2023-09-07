'use client'
import AboutUs from "@/components/home-components/AboutUs";
import DetailsContent from "@/components/home-components/DetailsContent";
import Footer from "@/components/home-components/Footer";
import HomeComponent from "@/components/Home";
import Navbar from "@/components/Navbar";
import ScrollingBanner from "@/components/home-components/ScrollingBanner";
import React, { useState } from "react";
import NavConent from "@/components/nav-components/NavConent";

export default function Home() {
  const [navClick, setNavClick] = useState(false)
  const onNaveClick = () => {
    setNavClick(!navClick);
  }
  return (
    <div className="bg-black">
      <Navbar
        navClick={navClick}
        onNaveClick={onNaveClick}
      />
      {!navClick &&
        <React.Fragment>
          <HomeComponent />
          <AboutUs />
          <ScrollingBanner />
          <DetailsContent />
          <Footer />
        </React.Fragment>
      }
      {navClick &&
        <NavConent />
      }
    </div>
  )
}
