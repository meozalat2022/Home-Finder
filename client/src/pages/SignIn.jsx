import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signinFailure,
  signinStart,
  signinSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // setLoading(true);
      dispatch(signinStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // setLoading(false);
        // setError(data.message);
        dispatch(signinFailure(data.message));
        return;
      }
      dispatch(signinSuccess(data));
      // setLoading(false);
      // setError(null);
      navigate("/");
    } catch (error) {
      dispatch(signinFailure(error.message));
      // setLoading(false);
      // setError(error.message);
    }
  };
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign In</h1>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        <input
          onChange={onChangeHandler}
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          onChange={onChangeHandler}
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button
          disabled={loading}
          className="bg-slate-700 p-3 text-white hover:opacity-90 disabled:opacity-80 rounded-lg uppercase"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Do Not Have an Account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;
