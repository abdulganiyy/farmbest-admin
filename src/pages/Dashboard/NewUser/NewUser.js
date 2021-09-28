import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import { fetchUser, updateUser } from "../../../slices/user";
// import { useDispatch, useSelector } from "react-redux";

import "./NewUser.css";

const NewUser = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useSelector((state) => state.userReducer);
  //   console.log(user);

  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    avatar: "",
    password: "",
    address: "",
    occupation: "",
    role: "",
  });

  //   React.useEffect(() => {
  //     dispatch(fetchUser(match.params.id));
  //     setData(user);
  //   }, [dispatch]);

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
      .post("https://farmbest-backend.herokuapp.com/users", data, config)
      .then((res) => {
        if (res.data.user) {
          setData({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            avatar: "",
            password: "",
            address: "",
            occupation: "",
            role: "",
          });
        }
      });
  };
  return (
    <>
      {data && (
        <div className="createuser-container">
          <div>
            <Link to="/dashboard">Go Back</Link>
          </div>
          <div className="createuser">
            <form className="form" onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  className="form-input"
                  name="firstname"
                  value={data.firstname}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  id="lastname"
                  type="text"
                  className="form-input"
                  name="lastname"
                  value={data.lastname}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="form-input"
                  name="username"
                  value={data.username}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="form-input"
                  name="email"
                  value={data.email}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  className="form-input"
                  name="password"
                  value={data.password}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="avatar" className="form-label">
                  My avatar
                </label>
                <input
                  id="avatar"
                  type="text"
                  className="form-input"
                  name="avatar"
                  value={data.avatar}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  className="form-input"
                  name="address"
                  value={data.address}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="occupation" className="form-label">
                  Location
                </label>
                <input
                  id="occupation"
                  type="text"
                  className="form-input"
                  name="occupation"
                  value={data.occupation}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <input
                  id="role"
                  type="text"
                  className="form-input"
                  name="role"
                  value={data.role}
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
      )}
    </>
  );
};

export default NewUser;
