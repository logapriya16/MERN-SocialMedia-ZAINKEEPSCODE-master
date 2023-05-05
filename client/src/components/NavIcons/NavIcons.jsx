import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Share from "../../img/share.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      {/* <UilSetting /> */}
      <Link to="*">
      <img src={Noti} alt="" />  
      </Link>
      
      <Link to="/profile/:id">
        <img src={Share} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
