import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { store } from "react-notifications-component";
import "../assets/css/loginSession.css";

function SessionModel({ setisSession }) {
  const passwordRef = useRef();
  const [loading, setloading] = useState(false);
  const [valueForm, setvalueForm] = useState({ userName: "", password: "" });
  const [error, seterror] = useState({ userName: "", password: "", com: "" });
  const [hide, sethide] = useState({
    userName: false,
    password: false,
    com: false,
  });
  const [submitting, setsubmitting] = useState(false);

  const setValue = (e) => {
    const { name, value } = e.target;
    if (e.target.id === "un") {
      setvalueForm({ ...valueForm, [name]: value.trim() });
    } else {
      setvalueForm({ ...valueForm, [name]: value });
    }
  };

  const closeModel = (e) => {
    if (e.target.className.includes("loginmodel_outer")) {
      setisSession(false);
    }
    if (e.target.className.includes("close_model")) {
      setisSession(false);
    }
  };

  const submitSession = (e) => {
    e.preventDefault();
    let err = {};
    //validate username
    if (!valueForm.userName.trim()) {
      err.userName = "Please Enter UserName";
    } else if (
      valueForm.userName.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
    ) {
      err.userName = "User Name Must Not Be Contain Special Characters";
    }
    if (!valueForm.password.trim()) {
      err.password = "Please Enter Password";
    }
    seterror(err);

    setsubmitting(true);
    sethide({ userName: false, com: false });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submitting) {
      submit();
    }
  }, [error]);

  const hideError = (e) => {
    Object.entries(error).map(([keys, val]) => {
      if (keys === e.target.name && val !== "") {
        sethide({ ...hide, [e.target.name]: true });
      }
    });
  };

  function submit() {
    setloading(true);
    Axios.post(
      `${process.env.REACT_APP_LMS_MAIN_URL}/account-api/deletetoken/`,
      {
        username: valueForm.userName.toUpperCase(),
        password: valueForm.password,
      }
    )
      .then(() => {
        setloading(false);
        setisSession(false);
        store.addNotification({
          title: "Login Session Cleared",
          message: process.env.REACT_APP_LMS_ALERT_NAME,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
            pauseOnHover: true,
            showIcon: true,
          },
          width: 600,
        });
      })
      .catch((err) => {
        setloading(false);
        setvalueForm({ ...valueForm, password: "" });
        if (err.response) {
          seterror({ ...error, com: err.response.data.msg });
        }
      });
  }

  return (
    <div>
      <div className="loginmodel_outer" onClick={closeModel}>
        <div className="loginmodel">
          <div className="close">
            <button className="close_model" onClick={closeModel}>
              <i className="fas fa-times-circle"></i>
            </button>
          </div>
          <h1>Clear Login Session</h1>
          <h3>
            Enter the username that you've used in your registration to unlock
            the user account
          </h3>
          {error.com ? (
            <p style={{ color: "red", fontSize: "13px", marginBottom: "5px" }}>
              {error.com}
            </p>
          ) : (
            ""
          )}
          <p>
            <label>Username</label>
            <input
              type="text"
              name="userName"
              id="un"
              onChange={setValue}
              value={valueForm.userName}
              onFocus={hideError}
            />
            {error.userName && (
              <span className={`tip ${hide.userName ? "hidetip" : ""}`}>
                {error.userName}
              </span>
            )}
          </p>
          <p>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="pw"
              onChange={setValue}
              value={valueForm.password}
              onFocus={hideError}
              ref={passwordRef}
            />
            {error.password && (
              <span className={`tip ${hide.password ? "hidetip" : ""}`}>
                {error.password}
              </span>
            )}
          </p>
          <button type="submit" className="otpsa" onClick={submitSession}>
            {loading ? (
              <i className="fas fa-circle-notch rotate"></i>
            ) : (
              "Clear Session"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SessionModel;
