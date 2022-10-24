import React, { useEffect, useRef } from "react";
import { login } from "../actions/user.actions.types";
import { connect } from "react-redux";
import "./App.css";

const LoginPage: React.FC<{}> = (props: any) => {
  const emailRef: React.RefObject<HTMLInputElement> = useRef(null);
  const passwordRef: React.RefObject<HTMLInputElement> = useRef(null);

  const callback = (data: any) => {
    console.log("Callback after Login");
  };

  const login = () => {
    let data: any = {
      values: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      },
      callback,
    };
    props.login(data);
  };

  return (
    <div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          name="email"
          id="floatingInput"
          placeholder="name@example.com"
          ref={emailRef}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      <div className="form-floating mt-3">
        <input
          type="password"
          className="form-control"
          name="password"
          id="floatingPassword"
          placeholder="Password"
          ref={passwordRef}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button
        onClick={() => {
          login();
        }}
        className="w-100 btn btn-lg btn-warning"
      >
        Sign in
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  login: (params: any) => dispatch(login(params)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
