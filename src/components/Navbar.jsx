import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return <div></div>;
};

export default Navbar;
