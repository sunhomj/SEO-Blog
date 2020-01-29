import { useState } from "react";
import { signup } from "../../actions/auth";
const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "sun",
    email: "sun@gmail.com",
    password: "sunholee",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });

  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = e => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signup(user).then(data => {
      if (data.error) {
        console.log(data.error);
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.mesage,
          showForm: false
        });
      }
      // .catch(err => {
      //   setValues({ ...values, error: data.error, loading: false });
      //   console.log(err);
      // });
    });
  };

  const handleChange = inputValue => e => {
    setValues({ ...values, error: false, [inputValue]: e.target.value });
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Type your Name"
            value={name}
          ></input>
        </div>
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
          Sign Up
        </button>
      </form>
    );
  };

  return <React.Fragment>{signupForm()}</React.Fragment>;
};

export default SignupComponent;
