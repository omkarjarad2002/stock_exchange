import React from "react";
import Nav from "../navbar/Nav";
import "./Exchanger.css";

function Exchanger() {
  return (
    <div className="exchanger">
      <Nav />
      <div className="exchange_dashboard">
        <div className="company_info_container">
          <div className="company_heading_container">
            <h1 className="text-2xl font-sans mx-4 py-4">COMPANY NAME </h1>
            <img className="" src="Images/company_img.jpg" alt=""></img>
          </div>
        </div>
        <div className="buy_stock_container">
          <div className="qty_price_container">
            <div className="gty_div">
              <div className="qty_name">Qty : </div>
              <div className="qty_number">
                <input className="qty_input"></input>
              </div>
            </div>
            <div className="qty_price">
              <div className="qty_name">Rs. : </div>
              <input className="price_input"></input>
            </div>
          </div>
          <button className="btn">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Exchanger;
