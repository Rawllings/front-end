import React from "react";
// import EducatorLoginSideBar from "./EducatorLoginSideBar";

import EducatorSideBar from "./EducatorSideBar";

function ScheduleExam() {
  // const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
// const email = sessionStorage.getItem("email");

  // console.log(isLoggedIn);

  return (
<>


    <>
    <div
      className="text-center text-5xl text-bold max-h-screen max-sm"
      style={{
        marginTop: "10px",
        backgroundImage: "https://bit.ly/3GP68X0",
      }}
    >
      <div
        style={{
          paddingTop: "100px",
          marginLeft: "300px",
          marginRight: "300px",
          paddingLeft: "200px",
        }}
      >
        <form>
  <div class="mb-6">
    <label for="course-name" class="block mb-2 text-sm font-medium text-black">
      Course name
    </label>
    <input type="text" id="course-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-6">
    <label for="date" class="block mb-2 text-sm font-medium text-black">
      Date
    </label>
    <input type="date" id="date" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-6">
    <label for="time" class="block mb-2 text-sm font-medium text-black">
      Time
    </label>
    <input type="time" id="time" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Submit
  </button>
</form>

      </div>
      {/* FORM  */}

     <EducatorSideBar />
    </div>
    </>
 
  

</>

    
  );
}

export default ScheduleExam;
