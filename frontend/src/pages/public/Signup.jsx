import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();

  const handleSignup = (data) => {
    console.log("data submitted in signup page : ", data);
    navigate("/create-username", { state: data });
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

      {/* Right Side - Signup */}
      <div className="w-1/2 flex items-center justify-center bg-blue-50">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-5 text-center text-blue-500">
            Signup
          </h2>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                autoComplete="off"
                required
                value={"Yawar Ejaz"}
                {...register("name")}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                autoComplete="off"
                required
                value={"yawar@gmail.com"}
                {...register("email")}
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button type="submit" className="btn btn-primary w-full">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
