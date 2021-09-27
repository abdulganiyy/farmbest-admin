import React from "react";
import "./InvestmentCard.css";

const InvestmentCard = ({ investment }) => {
  return (
    <tr>
      <td>{investment.name}</td>
      <td>{investment._id}</td>
      <td>{investment.address}</td>
      <td>{investment.units}</td>
      <td>{investment.description}</td>
    </tr>
  );
};

export default InvestmentCard;
