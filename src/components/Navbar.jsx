import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "./index";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState("dashboard");
  const [toggleDrawer, settoggleDrawer] = useState(false);
  return (
    <div>
      <CustomButton />
    </div>
  );
};

export default Navbar;
