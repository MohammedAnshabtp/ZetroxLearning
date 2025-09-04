"use client";
import React, { useState } from "react";
import Navbar from "./Nav";
import MobileNavbar from "./Mob";

function Responsive() {
  const [showNav, setShownNav] = useState(false);
  const showNavHandler = () => setShownNav(true);
  const hideNavHandler = () => setShownNav(false);
  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNavbar showNav={showNav} closeNav={hideNavHandler} />
    </div>
  );
}

export default Responsive;
