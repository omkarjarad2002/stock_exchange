import React from "react";
import { Link } from "react-router-dom";
import "./CompanyLst.css";

function CompanyLst() {
  const companyData = [
    {
      name: "IBM",
      price: 230,
    },
    {
      name: "MSFT",
      price: 530,
    },
    {
      name: "Reliance",
      price: 730,
    },
    {
      name: "xyz",
      price: 2130,
    },
    {
      name: "sdfa",
      price: 23120,
    },
    {
      name: "jkj",
      price: 200,
    },
    {
      name: "sjnd",
      price: 8,
    },
  ];

  return (
    <div className="container">
      <div className="heading">
        <h1 className="text-4xl py-5 px-5 font-sans font-bold">
          Company name's & shares
        </h1>
        <div className="lst">
          {companyData.map((company) => (
            <div className="company">
              <div className="heading_company">
                <h1>{company.name}</h1>
              </div>
              <div className="price_stock">
                <h1>Rs.{company.price}</h1>
              </div>
              <button className="btn btn-primary">
                {" "}
                <Link to="/stock_exchange">Buy now </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyLst;
