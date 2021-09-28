import React from "react";

import InvestmentCard from "../../../components/InvestmentCard/InvestmentCard";
import { fetchInvestments } from "../../../slices/investments";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import "./Investments.css";

const Users = () => {
  const dispatch = useDispatch();
  const { investments } = useSelector((state) => state.investmentsReducer);
  console.log(investments);

  React.useEffect(() => {
    dispatch(fetchInvestments());
  }, [dispatch]);
  return (
    <div>
      <div className="create-investment">
        <Link to="/dashboard/investment">
          Create Investment<ion-icon name="create-outline"></ion-icon>
        </Link>
      </div>
      <div className="investments-wrapper">
        <table className="investments">
          <tr>
            <th>Name</th>
            <th>Reference</th>
            <th>Address</th>
            <th>Units</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
          {investments &&
            investments.map((investment) => (
              <InvestmentCard investment={investment} key={investment._id} />
            ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
