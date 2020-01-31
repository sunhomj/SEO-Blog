import { useState, useEffect } from "react";
import { signin, authenticate, isAuth } from "../../actions/auth";
import Router from "next/router";

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: "sun@gmail.com",
    password: "sunholee",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });
  useEffect(() => {
    isAuth() && Router.push("/");
  }, []);

  const { email, password, error, loading, message, showForm } = values;

  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        // save user token to cookie
        // save user info to localstorage
        //authenticate user
        authenticate(data, () => {
          Router.push(`/`);
        });
      }
    });
  };

  const handleChange = inputValue => e => {
    setValues({ ...values, error: false, [inputValue]: e.target.value });
  };

  const showLoading = () => (loading ? <div className="alert alert-info">Loading ...</div> : "");
  const showError = () => (error ? <div className="alert alert-danger">{error}</div> : "");
  const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : "");

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Email Address"
            value={email}
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signinForm()}
    </React.Fragment>
  );
};

export default SigninComponent;
