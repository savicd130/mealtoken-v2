import React from "react";
import { useForm } from "react-hook-form";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Sign In</h3>
      </div>
      <div className="loginForm__box">
        <PersonIcon fontSize="large" className="iconInput" />
        <input
          placeholder="Username"
          autoComplete="off"
          {...register("username", { required: true, maxLength: 20 })}
        />
      </div>
      <div className="loginForm__box">
        <LockIcon fontSize="large" className="iconInput" />
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          {...register("password", { required: true, minLength: 6 })}
        />
      </div>
      <div>
        <button type="submit">Sign In</button>
      </div>
      {errors.username && <p style={{ color: "red" }}>Username is required</p>}
      {errors.password && <p style={{ color: "red" }}>Password is required</p>}
      <div className="loginForm__create">
        <p>Don't have an account?</p> <Link to="signup">Create one</Link>
      </div>
    </form>
  );
}
