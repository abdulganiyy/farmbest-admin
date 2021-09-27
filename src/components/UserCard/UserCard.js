import React from "react";
import "./UserCard.css";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user._id}</td>
      <td>{user.email}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>
        <Link to={`/dashboard/user/${user._id}`}>
          <ion-icon name="create-outline"></ion-icon>
        </Link>
      </td>
    </tr>
  );
};

export default UserCard;
