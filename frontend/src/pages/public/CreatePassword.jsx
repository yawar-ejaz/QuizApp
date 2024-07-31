import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email, username } = location.state || {};

  useEffect(() => {
    if (!name || !email || !username) {
      navigate("/signup");
    }
  }, [name, email, username, navigate]);

  const isValidPassword = (password, confirmedPassword) => {
    if (password.length < 7) {
      setError("Password should atleast have 7 letters");
      return false;
    } else if (password !== confirmedPassword) {
      setError("Passwords do not match");
      return false;
    } else {
      return true;
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (isValidPassword(password, confirmedPassword)) {
      const data = { name, email, username, password };
      console.log("data submitted in create-password page : ", data);
      try {
        const result = await axios.post("/auth/signup", data);
        alert("Account created successfully");
        console.log("Account created successfully");
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        alert("Internal error");
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-blue-100 p-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-700">
            Already have an account?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Login to access your account!
          </p>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="btn btn-primary px-8 py-3"
        >
          Login
        </button>
      </div>

      {/* Right Side - Create Password */}
      <div className="w-1/2 flex items-center justify-center bg-blue-50">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-5 text-center text-blue-500">
            Create a Password
          </h2>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
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
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {password && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-sm leading-5 text-blue-500 font-bold"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmedPassword ? "text" : "password"}
                  id="confirmedPassword"
                  name="confirmedPassword"
                  className="input input-bordered w-full"
                  placeholder="Confirm your password"
                  value={confirmedPassword}
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  required
                />
                {confirmedPassword && (
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmedPassword(!showConfirmedPassword)
                    }
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-sm leading-5 text-blue-500 font-bold"
                  >
                    {showConfirmedPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>
            </div>
            {error && <p className="text-red-500 text-sm  mb-4">{error}</p>}
            <div className="flex items-center justify-between mb-4">
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
