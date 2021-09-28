import React from "react";

import UserCard from "../../../components/UserCard/UserCard";
import { fetchUsers } from "../../../slices/users";
import { useDispatch, useSelector } from "react-redux";

import "./Users.css";
import { Link } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);
  console.log(users);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <div className="create-user">
        <Link to="/dashboard/user">
          Create User<ion-icon name="create-outline"></ion-icon>
        </Link>
      </div>
      <div className="users-wrapper">
        <table className="users">
          <tr>
            <th>Username</th>
            <th>Reference</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Edit</th>
          </tr>
          {users &&
            users.map((user) => <UserCard user={user} key={user._id} />)}
        </table>
      </div>
    </div>
  );
};

export default Users;
