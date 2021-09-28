import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "./NewInvestment.css";

const NewInvestment = () => {
  const [data, setData] = React.useState({
    name: "",
    price: "",
    description: "",
    images: [],
    address: "",
    maturityDate: "",
    harvestingDate: "",
    plantingDate: "",
    units: "",
    paymentClosingDate: "",
  });

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post("https://farmbest-backend.herokuapp.com/investments", data, config)
      .then((res) => {
        if (res.data.user) {
          setData({
            name: "",
            price: "",
            description: "",
            images: [],
            address: "",
            maturityDate: "",
            harvestingDate: "",
            plantingDate: "",
            units: "",
            paymentClosingDate: "",
          });
        }
      });
  };
  return (
    <>
      <div className="createinvestment-container">
        <div>
          <Link to="/dashboard">Go Back</Link>
        </div>
        <div className="createinvestment">
          <form className="form" onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="form-input"
                name="name"
                value={data.name}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                id="description"
                type="text"
                className="form-input"
                name="description"
                value={data.description}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                id="price"
                type="text"
                className="form-input"
                name="price"
                value={data.price}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="units" className="form-label">
                Units
              </label>
              <input
                id="units"
                type="text"
                className="form-input"
                name="units"
                value={data.units}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentClosingDate" className="form-label">
                Payment Closing
              </label>
              <input
                id="paymentClosingDate"
                type="text"
                className="form-input"
                name="paymentClosingDate"
                value={data.paymentClosingDate}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="plantingDate" className="form-label">
                Estimated Planting Date
              </label>
              <input
                id="plantingDate"
                type="text"
                className="form-input"
                name="plantingDate"
                value={data.plantingDate}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="harvestingDate" className="form-label">
                Estimated Harvesting Date
              </label>
              <input
                id="harvestingDate"
                type="text"
                className="form-input"
                name="harvestingDate"
                value={data.harvestingDate}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="maturityDate" className="form-label">
                Estimated Investment Maturity Date
              </label>
              <input
                id="maturityDate"
                type="text"
                className="form-input"
                name="maturityDate"
                value={data.maturityDate}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="form-button">
                add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewInvestment;
