import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import google from "../assets/Images/google_logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import { NavLink } from "react-router-dom";

const Sign_In = () => {
  // State for form inputs and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid email address.";
    }

    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", { email, password });
    }
  };

  return (
    <>
      {/* Main Body with Background Image */}
      <div className="bg-cover bg-center background-image">
        {/* Menubar */}
        <nav className="flex justify-between items-center lg:px-20 p-4">
          {/* Left-side: Logo */}
          <div className="flex items-center">
            {/* Tailwind handles the responsive change */}
            <NavLink to="/">
              <img
                src={logo}
                alt="Logo"
                className="hidden lg:block lg:h-10 h-6"
              />
            </NavLink>
            <NavLink to="/">
              <img
                src={Uparrow}
                alt="Logo Small"
                className="block lg:hidden h-8"
              />
            </NavLink>
          </div>

          {/* Right-side: Need help */}
          <div>
            <a href="#" className="text-[#2D2624] font-medium hover:underline">
              Need help?
            </a>
          </div>
        </nav>

        {/* Content Section */}
        <div className="flex justify-center items-center p-4">
          <div className="lg:w-half h-auto bg-white rounded-[25px] lg:p-6 p-4 pb-10">
            <h1 className="lg:text-[24px] text-[20px] font-bold text-center mb-4 text-[#2D2624]">
              Welcome to BuyUpvotes!
            </h1>
            <p className="text-center text-sm mb-4">
              New user?{" "}
              <NavLink
                to="/signup"
                className="text-[#FF5700] font-bold underline"
              >
                Create an account
              </NavLink>
            </p>
            <button className="flex items-center justify-start w-full border border-gray-300 hover:border-[#2D2426] hover:bg-[#dfdcdc] rounded-full px-4 py-2.5 lg:text-[16px] text-sm font-bold text-[#2d2624] mb-4 transition-all ease-in duration-200">
              <img src={google} alt="Google Logo" className="w-8 h-8 mr-12" />
              Sign in with Google
            </button>
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 block w-full px-3.5 py-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-2 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 block w-full px-3.5 py-3 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path
                        fill="currentColor"
                        d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                      ></path>
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <div className="flex justify-end items-center mb-6">
                <a href="#" className="text-sm text-[#2d2624] underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full border border-[#FF5700] hover:bg-orange-600 hover:text-[#FFF] text-[#FF5700] font-bold py-2 transition-all ease-in duration-200 px-4 rounded-full"
              >
                Sign in
              </button>
            </form>
            <p className="text-[14px] text-center font-bold text-[#2D2624] mt-6">
              By signing up, I agree to{" "}
              <a href="#" className="underline decoration-[#2d262466]">
                Terms and Service
              </a>
              and{" "}
              <a href="#" className="underline decoration-[#2d262466]">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_In;