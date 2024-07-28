import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateUsername = () => {
  const [username, setUsername] = useState("yawar");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email } = location.state || {};

  useEffect(() => {
    if (!name || !email) {
      navigate("/signup");
    }
  }, [name, email, navigate]);

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    console.log("name i us : ", name);
    console.log("email i us: ", email);
    console.log("username i us: ", username);
    if (username.length < 5) {
      setError("username should atleast have 5 letters");
    } else if (username === "yawar.ejaz") {
      setError("Username is already taken");
    } else {
      navigate("/create-password", { state: { name, email, username } });
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

      {/* Right Side - Create Username */}
      <div className="w-1/2 flex items-center justify-center bg-blue-50">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-5 text-center text-blue-500">
            Select a Username
          </h2>
          <form onSubmit={handleUsernameSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="input input-bordered w-full"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
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

export default CreateUsername;
