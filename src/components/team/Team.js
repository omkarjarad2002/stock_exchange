import React from "react";
import "./Team.css";

function Team() {
  const people = [
    {
      name: "500",
      role: "Reliance",
      imageUrl: "../../../public/Images/company_img.jpg",
    },
    {
      name: "200",
      role: "PNB",
      imageUrl: "../../../public/images/profile_icon.png",
    },
    {
      name: "23.56",
      role: "MHS",
      imageUrl: "../../../public/images/profile_icon.png",
    },
    // More people...
  ];

  return (
    <div className="team bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <div className="team_headings">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stocks in News
            </h2>
          </div>
        </div>
        <ul
          role="list"
          className=" grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((pearson) => (
            <div>
              <div className="pearson_div">
                <p className="pearson_role mx-2">#{pearson.role}</p>
              </div>
              <div className="circle"></div>
              <div className="pearson flex items-center gap-x-6">
                <img className="img" src={pearson.imageUrl} alt=" "></img>
              </div>
              <div className="pearson_name text-5xl">#{pearson.name}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Team;
