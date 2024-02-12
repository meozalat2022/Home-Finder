import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 p-3 text-white hover:opacity-90 disabled:opacity-80 rounded-lg uppercase">
          Sign Up
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Have an Account?</p>
        <Link to={"/sing-in"}>
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
