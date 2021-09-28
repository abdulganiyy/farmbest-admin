import React from "react";
import "./InvestmentCard.css";

import { Link } from "react-router-dom";

const InvestmentCard = ({ investment }) => {
  return (
    <tr>
      <td>{investment.name}</td>
      <td>{investment._id}</td>
      <td>{investment.address}</td>
      <td>{investment.units}</td>
      <td>{investment.description}</td>
      <td>
        <Link to={`/dashboard/investment/${investment._id}`}>
          <ion-icon name="create-outline"></ion-icon>
        </Link>
      </td>
    </tr>
  );
};

export default InvestmentCard;
