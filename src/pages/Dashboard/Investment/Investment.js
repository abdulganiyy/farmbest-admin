import React from "react";

import { fetchInvestment, updateInvestment } from "../../../slices/investment";
import { useDispatch, useSelector } from "react-redux";

import "./Investment.css";

const Investment = ({ match }) => {
  const dispatch = useDispatch();
  const { investment } = useSelector((state) => state.investmentReducer);
  //   console.log(user);

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

  React.useEffect(() => {
    dispatch(fetchInvestment(match.params.id));
    setData(investment);
  }, [dispatch]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateInvestment({
        id: match.params.id,
        data,
      })
    );
  };
  return (
    <>
      {data && (
        <div className="editinvestment-container">
          <div>Go Back</div>
          <div className="editinvestment">
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
                <button type="submit" className="form-button">
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Investment;
