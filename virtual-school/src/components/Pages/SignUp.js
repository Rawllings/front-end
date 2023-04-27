import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

function SignUp() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //   const token = localStorage.getItem("jwt");

  function handleSubmit(e) {
    e.preventDefault();

    //
    fetch("/school_owners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        owner_name: name,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div>
      <div
        className="items-center pt-5 pl-32 max-h-screen"
        style={{ paddingLeft: "500px" }}
      >
        <a href="/">
          <h1
            className="text-5xl text-blue-800 font-bold pb-5 pl-20"
            style={{ paddingLeft: "140px" }}
          >
            V<span className="text-5xl text-yellow-400 ">S </span>
          </h1>
        </a>

        <div className="w-full max-w-sm p-4 bg-white border border-black rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign up to our platform
            </h5>

            {/* <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Rawllings Tallam"
                required
              />
            </div> */}

            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                onChange={handleNameChange}
                type="text"
                name="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                name="email"
                id="email"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <NavLink to="/signup/add-school">
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                SignUp to your account
              </button>
            </NavLink>

            {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <NavLink
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </NavLink>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
