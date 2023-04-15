import React from "react";
// import { NavLink } from "react-router-dom";

function Result() {
  return (
    <div className="flex gap-10 pt-5 pl-20">
      {/* CARD 1 */}

      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Test
          </h5>
        </a>
        <p class="mb-3 font-normal text-black dark:text-gray-400">
          Here are the results for your test.
        </p>
        <a
          href="/"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View
        </a>
      </div>

      {/* CARD 2  */}

      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
            Assessment
          </h5>
        </a>
        <p class="mb-3 font-normal text-black dark:text-gray-400">
          Here are the results for your assessment.
        </p>
        <a
          href="/"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View
        </a>
      </div>

      {/* CARD 3 */}

      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-500 dark:text-white">
            Exam
          </h5>
        </a>
        <p class="mb-3 font-normal text-black dark:text-gray-400">
          Here are the results for your Exams.
        </p>
        <a
          href="/"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View
        </a>
      </div>
    </div>
  );
}

export default Result;
