import { Fragment, useState } from "react";
// import { Dialog, Popover, Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
          <Link to="/getLst">
            <button class="btn_start btn-sm my-4 mx-4">Get Started</button>
          </Link>
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
      </div>
    </div>
  );
}

export default Navbar;
