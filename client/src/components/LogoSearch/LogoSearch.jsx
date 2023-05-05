import React from "react";
import Popup from "reactjs-popup";
import Logo from "../../img/small_logo.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const HandleSearch =()=>{
  return(
    
    <div>

      <Popup trigger=
                {<button>click</button>}
                position="right center">
                <div>see all thhe Posts for latest Trends</div>
                
      </Popup>
      
    </div>
  )
}
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <button onClick={HandleSearch} className="search-btn"><UilSearch /></button>
                
          </div> 
      </div>
      
    </div>
  );
};

export default LogoSearch;
