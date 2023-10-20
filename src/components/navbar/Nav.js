import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="comp_head">
        <h1 class="d-inline-block align-text-top text-white mx-4 my-4 font-bold font-sans text-3xl">
          STOCK EXCHANGER
        </h1>
      </div>
      <div className="img_user">
        <img src="Images/company_img.jpg" alt="/"></img>
      </div>
    </div>
  );
}

export default Nav;
