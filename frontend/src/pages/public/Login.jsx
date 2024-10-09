import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import useAuthContext from "../../hooks/useAuthContext";
import { ACTIONS } from "../../contexts/authContext";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const { handleSubmit, register, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (data) => {
    try {
      const result = await axios.post("/auth/login", data);
        console.log(result.data.token);
        console.log(jwtDecode(result.data.token));
    //   localStorage.setItem("token", result.data.token);
    //   dispatch({
    //     type: ACTIONS.LOGIN,
    //     payload: user,
    //   });
    //   navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
    reset();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login */}
      <div className="w-1/2 flex items-center justify-center bg-blue-50">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-5 text-center text-blue-500">
            Login
          </h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="emailOrUsername"
              >
                Email or Username
              </label>
              <input
                type="text"
                id="emailOrUsername"
                name="emailOrUsername"
                className="input input-bordered w-full"
                placeholder="Enter your email or username"
                autoComplete="off"
                required
                // value={"yawar@gmail.com"}
                {...register("emailOrUsername")}
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="input input-bordered w-full pr-16"
                  placeholder="Enter your password"
                  autoComplete="off"
                  required
                  //   value={"password"}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-sm leading-5 text-blue-500 font-bold"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
            <div className="text-center">
              <a
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Signup */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-blue-100 p-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-700">New here?</h2>
          <p className="text-lg text-gray-700 mt-2">
            Sign up and discover great quizzes!
          </p>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="btn btn-primary px-8 py-3"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
