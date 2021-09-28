import React from "react";

import { fetchUser, updateUser } from "../../../slices/user";
import { useDispatch, useSelector } from "react-redux";

import "./User.css";

const User = ({ match }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
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

  React.useEffect(() => {
    let isActive = true;

    if (isActive) {
      dispatch(fetchUser(match.params.id));

      setData(user);
    }

    return () => {
      isActive = false;
    };
  }, [dispatch, match.params.id, user]);

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
      updateUser({
        id: match.params.id,
        data,
      })
    );
  };
  return (
    <>
      {data && (
        <div className="edituser-container">
          <div>Go Back</div>
          <div className="edituser">
            <form className="form" onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="firstname" className="form-label"></label>
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
                <label htmlFor="lastname" className="form-label"></label>
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
                <label htmlFor="username" className="form-label"></label>
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
                <label htmlFor="email" className="form-label"></label>
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
                <label htmlFor="password" className="form-label"></label>
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
                <label htmlFor="avatar" className="form-label"></label>
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
                <label htmlFor="address" className="form-label"></label>
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
                <label htmlFor="occupation" className="form-label"></label>
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
                <label htmlFor="role" className="form-label"></label>
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

export default User;
