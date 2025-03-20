import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [inSign, setInsign] = useState(true);

  const handleLogin = () => {
    setInsign(!inSign);
  };
  return (
    <>
      <div className="absolute z-40">
        <Header />
      </div>
      <div className=" ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web_tall_panel/IN-en-20250317-TRIFECTA-perspective_d3bd14de-3c51-4227-9244-f14c89469189_large.jpg"
          alt="Netflix Logo"
        />
      </div>
      <div className="absolute inset-0 mx-120 my-15 h-100 opacity-100 w-3/12">
        <form className="p-8 bg-gray-800 opacity-500 rounded-lg shadow-lg space-y-4 ">
          <h2 className="text-white font-bold">
            {inSign ? "Sign In" : "Sign Up"}
          </h2>
          {!inSign ? (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 text-white bg-gray-700 rounded"
            />
          ) : (
            ""
          )}

          <input
            type="text"
            placeholder="Email address"
            className="w-full p-2 text-white bg-gray-700 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 text-white bg-gray-700 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-red-600 text-white rounded"
          >
            {inSign ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white cursor-pointer" onClick={handleLogin}>
            {/* {inSign ? " New to Netflix? Sign up Now" : "Sign In Now"} */}
            {inSign
              ? "New to Netflix? Sign up Now"
              : "Already have an account? Sign In"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
