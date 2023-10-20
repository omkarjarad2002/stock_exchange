import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Addcompany.css";

function Addcompany() {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const changeImage = (e) => {
    const files = e.target.files;

    if (!files) {
      return;
    }

    const file = files[0];

    setFile(file);
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    items: "",
    address: "",
    file: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const uploadImage = async () => {
    const formdata = new FormData();
    formdata.append("file", file);
    const res = await axios.post(
      "https://bistro-backend.onrender.com/uploadfile",
      formdata
    );
    return res;
  };

  const PostData = async (e) => {
    e.preventDefault();
    const file = await uploadImage();
    console.log(file);

    const { name, email, phone, items, address } = user;

    const res = await fetch(
      "https://bistro-backend.onrender.com/addrestaurant",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          items,
          address,
          file: file.data.file.filename,
        }),
      }
    );

    const data = await res.json();
    console.log(res);

    if (!data || res.status === 422) {
      window.alert("Please register first !");
      navigate("/register");
    } else {
      window.alert("Resataurant added Successfully !!");
      navigate("/fooditems");
    }
  };

  return (
    <div>
      <section
        className="section__height d-flex align-items-center justify-content-center"
        id="contact"
      >
        <div className="container1 container">
          <div className="contact__container">
            <form className="" method="POST" encType="multipart/form-data">
              <div className="mb-3 pt-2 d-flex text-align-center align-items-center">
                <label htmlhtmlFor="name">
                  <i className="zmdi zmdi-store">Company Name :</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  name="name"
                  placeholder="Enter company Name"
                  onChange={handleInputs}
                  required
                />
              </div>
              <hr />
              <div className="mb-3 pt-2 d-flex text-align-center align-items-center">
                <label htmlhtmlFor="name">
                  <i className="zmdi zmdi-store">Total number of shares : </i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  name="totalshares"
                  placeholder="Enter number of shares"
                  onChange={handleInputs}
                  required
                />
              </div>
              <hr />
              <div className="mb-3 pt-2 d-flex text-align-center align-items-center">
                <label htmlhtmlFor="name">
                  <i className="zmdi zmdi-store">Total available shares : </i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  name="availableshares"
                  placeholder="Enter available shares"
                  onChange={handleInputs}
                  required
                />
              </div>
              <hr />
              <div className="mb-3 pt-2 d-flex text-align-center align-items-center">
                <label htmlhtmlFor="name">
                  <i className="zmdi zmdi-store">Enter each share price : </i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  name="shareprice"
                  placeholder="Enter Share Price"
                  onChange={handleInputs}
                  required
                />
              </div>

              {/* <p>Upload Image of Restaurant:</p>
              <div className="mb-3 pt-2 d-flex text-align-center ">
                <label htmlhtmlFor="file">
                  <i className="zmdi zmdi-filter-b-and-w mx-1"></i>
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="file"
                  onChange={changeImage}
                  required
                />
              </div> */}
              <hr />
              <div className="col-12 pt-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    style={{ border: "1px solid grey" }}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlhtmlFor="invalidCheck2"
                  >
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div className="d-grid pb-3  d-md-block">
                <button
                  className="btn btn-outline-danger  p-2   rounded"
                  id="button"
                  type="submit"
                  value="Submit"
                  role="button"
                  onClick={PostData}
                >
                  Add Restaurant
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Addcompany;
