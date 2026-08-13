import React from "react";
import { useForm } from "react-hook-form";
import "./RegisterPatient.css";

function RegisterPatient() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert("Patient Registered Successfully!");
    console.log(data);
  };

  return (
    <div className="register-page">

      <form
        className="register-form"
        onSubmit={handleSubmit(onSubmit)}
      >

        <h2>Register Patient</h2>

        <input
          type="text"
          placeholder="Enter Patient Name"
          {...register("name", {
            required: "Patient name is required"
          })}
        />

        {errors.name && <p>{errors.name.message}</p>}


        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email must contain @"
            }
          })}
        />

        {errors.email && <p>{errors.email.message}</p>}


        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be at least 6 characters"
            }
          })}
        />

        {errors.password && <p>{errors.password.message}</p>}


        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default RegisterPatient;