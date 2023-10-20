import React, { useState, useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import "./Home.css";

function Home() {
  const stats = [
    {
      name: "Geneticus Breakthrough Revolutionizes DNA Sequencing Technology",
      date: "September 15, 2023",
    },
    {
      name: "Geneticus Collaborates with Leading Cancer Research Center",
      date: "September 10, 2023",
    },
    {
      name: "Geneticus Launches Educational Outreach Program to Foster Genomic Literacy",
      date: "September 5, 2023",
    },
  ];

  return (
    <>
      <div className="home">
        <div className="color_overlay">
          <div className="head_div text-center">
            <div className="learn_more_div my-5">
              <div className="mx-1">
                <button className="learn_more_btn">Learn more</button>
              </div>
              <div className="mx-2">
                <MdArrowForwardIos className="for_arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tech ">
        <hr></hr>
        <div className="box py-3 px-5 ">
          <div className=" flex flex-wrap grid grid-wrap ">
            <dt className="text-sm font-medium leading-6 ">
              TC Q2 result: Net profit jumps 10% to Rs 4,927 crore.
            </dt>

            <dd className=" ">Octomber 20, 2023</dd>
          </div>
        </div>
        <hr></hr>
        <div className="box py-3 px-5">
          <div className=" ">
            <dt className="text-sm font-medium leading-6 ">
              HUL Q2 results: Earnings beat street estimates; net profit up
              3.86% on-year.
            </dt>

            <dd className="  text-gray-500  ">Octomber 20, 2023</dd>
          </div>
        </div>
        <hr></hr>
        <div className="box py-3 px-5">
          <dt className="text-sm font-medium leading-6 ">
            Taking Stock: Bears tighten grip as Nifty slips below 19,650; Sensex
            falls 248 points.
          </dt>

          <dd className="w-full flex-none text-small font-sans font-medium leading-10 tracking-tight text-gray-500  ">
            Octomber 20, 2023
          </dd>
        </div>
      </div>
    </>
  );
}

export default Home;
