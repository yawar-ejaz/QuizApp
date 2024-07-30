import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateUsername = () => {
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email } = location.state || {};
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (!name || !email) {
      navigate("/signup");
    }
  }, [name, email, navigate]);

  const handleUsernameSubmit = ({ username }) => {
    const usernameRegexCapital = /[A-Z]/;
    const usernameRegexCharacters = /^[a-z0-9._]+$/;

    if (username.length < 5) {
      setError("Username should be at least 5 letters long");
    } else if (username === "yawar.ejaz") {
      setError("Username is already taken");
    } else if (usernameRegexCapital.test(username)) {
      setError("Username should not contain capital letters");
    } else if (!usernameRegexCharacters.test(username)) {
      setError(
        'Username should not contain special characters except "_" and "."'
      );
    } else {
      const data = { name, email, username };
      console.log("data submitted in create-username page : ", data);
      navigate("/create-password", { state: data });
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
          <form onSubmit={handleSubmit(handleUsernameSubmit)}>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="input input-bordered w-full pr-12"
                  placeholder="Enter your username"
                  autoComplete="off"
                  value={"yawar"}
                  required
                  {...register("username")}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-blue-600 bg-gray-200 btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="text-xl font-bold">i</span>
                </button>
              </div>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Username Guidelines</h3>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Username should be at least 5 letters long.</li>
              <li>Username should not contain capital letters.</li>
              <li>
                Username should not contain special characters except "_" and
                "."
              </li>
              <li>
                Username can contain numbers but should not start with a number.
              </li>
            </ul>
            <div className="text-right">
              <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateUsername;
