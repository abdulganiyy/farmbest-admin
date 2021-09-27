import React from "react";

import UserCard from "../../../components/UserCard/UserCard";
import { fetchUsers } from "../../../slices/users";
import { useDispatch, useSelector } from "react-redux";

import "./Users.css";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);
  console.log(users);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <div className="create-user">Create User</div>
      <div className="users-wrapper">
        <table className="users">
          <tr>
            <th>Username</th>
            <th>Reference</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {users &&
            users.map((user) => <UserCard user={user} key={user._id} />)}
        </table>
      </div>
    </div>
  );
};

export default Users;
