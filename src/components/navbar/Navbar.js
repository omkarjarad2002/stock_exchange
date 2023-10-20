import { Fragment, useContext, useState } from "react";
// import { Dialog, Popover, Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";
import Stock_Details from "../../Stock_Details.json";
import { conApp } from "../../ContextAPI/ContextAPI";
import { Link } from "react-router-dom";

function Navbar() {
  const { userAdd, setUserAdd, constractDetails, setConstractDetails } =
    useContext(conApp);

  const handleConnection = async () => {
    try {
      if (!window.ethereum) {
        console.log("No metamask");
        throw "No Metatmask";
      }

      const ethers = require("ethers");
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        Stock_Details.address,
        Stock_Details.abi,
        signer
      );

      setUserAdd(signer.address);
      setConstractDetails(contract);
    } catch (error) {
      console.log("Error while connecting to wallet");
    }
  };

  return (
    <div className="navbar flex-col">
      <nav class="navbar bg-body-tertiary d-flex">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1 class="d-inline-block align-text-top text-white mx-4 my-4 font-bold font-sans text-3xl">
              STOCK EXCHANGER
            </h1>
          </a>
        </div>
        <div class="btn_div">
          {userAdd == "" ? (
            <button class="btn btn-sm my-4 mx-4" onClick={handleConnection}>
              Connect To Wallet
            </button>
          ) : (
            <button class="btn btn-sm my-4 mx-4" onClick={handleConnection}>
              {userAdd.substring(0, 4) +
                "..." +
                userAdd.substring(userAdd.length - 4, userAdd.length)}
            </button>
          )}
        </div>
      </nav>
      <div className="hello_sec">
        <h1 className="text-white mx-4 my-10 text-5xl font-sans font-bold">
          Revamp Your Trading Experience
        </h1>

        <p className="p font-sans font-normal">
          Welcome to Equilink, the go-to destination for all your stock exchange
          need
        </p>

        {/* <button onClick={}></button>
         */}
        <Link to="/getLst" className="btn btn-sm border p-3 btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
// https://dribbble.com/shots/21918621-Equilink-Landing-page-for-stock-exchange-platform
