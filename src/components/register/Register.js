import React from "react";
import "./register.css";
import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({
    nameError: null,
    emailErrors: null,
    userNameErrors: null,
    passwordErrors: null,
    passwordConfirmErrors: null,
  });

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "name") {
      setErrors({
        ...errors,
        nameError:
          e.target.value.length === 0 ? "Please Enter your name" : "Done!",
      });
    }

    if (e.target.name === "email") {
      let regEmail = /[a-zA-Z0-9](@)(hotmail|live|outlook|yahoo|gmail)(.com)$/;
      setErrors({
        ...errors,
        emailErrors:
          e.target.value.length === 0
            ? "field can't be empty"
            : !regEmail.test(e.target.value)
            ? "Enter a valid Email"
            : null,
      });
    }

    if (e.target.name === "userName") {
      let regUserName = /([^S*][a-zA-Z])$/;
      setErrors({
        ...errors,
        userNameErrors:
          e.target.value.length === 0
            ? "field can't be empty"
            : !regUserName.test(e.target.value)
            ? "Enter a valid username"
            : null,
      });
    }

    if (e.target.name === "password") {
      let regPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setErrors({
        ...errors,
        passwordErrors:
          e.target.value.length === 0
            ? "field can't be empty"
            : !regPassword.test(e.target.value)
            ? "your password must be at least 8 characters and contain at least one uppercase letter , one lowercase letter , a digit & speacial character "
            : null,
      });
    }

    if (e.target.name === "passwordConfirm") {
      setErrors({
        ...errors,
        passwordConfirmErrors:
          e.target.value !== user.password ? "password didn't match" : null,
      });
    }
  };

  return (
    <>
      <div className="con">
        <div className="fadediv2">
          <div className="pagecontent">
            <div className="container fadecon">
              <form>
                <h1>Register</h1>

                <div className="row mt-4">
                  <input
                    placeholder="Name"
                    name="name"
                    type="text"
                    required
                    className="input-element"
                    value={user.name}
                    onChange={(e) => {
                      handleChanges(e);
                    }}
                  />
                  <span className="error-handler">{errors.nameError}</span>
                </div>

                <div className="row mt-3">
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    required
                    className="input-element"
                    value={user.email}
                    onChange={(e) => {
                      handleChanges(e);
                    }}
                  />
                  <span className="error-handler">{errors.emailErrors}</span>
                </div>

                <div className="row mt-3">
                  <input
                    placeholder="User Name"
                    name="userName"
                    type="text"
                    required
                    className="input-element"
                    value={user.userName}
                    onChange={(e) => {
                      handleChanges(e);
                    }}
                  />
                  <span className="error-handler">{errors.userNameErrors}</span>
                </div>

                <div className="row mt-3">
                  <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    required
                    className="input-element"
                    value={user.password}
                    onChange={(e) => {
                      handleChanges(e);
                    }}
                  />
                  <span className="error-handler">{errors.passwordErrors}</span>
                </div>

                <div className="row mt-3">
                  <input
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    type="password"
                    required
                    className="input-element"
                    value={user.passwordConfirm}
                    onChange={(e) => {
                      handleChanges(e);
                    }}
                  />
                  <span className="error-handler">
                    {errors.passwordConfirmErrors}
                  </span>
                </div>
                <div className="row mt-4">
                  <button className="input-element regbtn" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
