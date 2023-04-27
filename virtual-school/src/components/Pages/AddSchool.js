import React, { useState } from "react";
import Swal from "sweetalert2";

function AddSchool({ ownerId }) {
  const [name, setName] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  function handleSubmit(e) {
    const token = localStorage.getItem("jwt");

    e.preventDefault();

    // const user = {
    //     name: name,
    //   email: email,
    //   schoolId: schoolId
    // };
    // console.log(user);

    fetch("/schools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        school_name: name,
        school_owner_id: ownerId,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Success!",
          text: "School created successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      });
  }

  return (
    <div>
      <form
        className="flex flex-col gap-2 w-1/2 pt-5"
        style={{ marginLeft: "350px" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control drop-shadow-lg"
          placeholder="name"
          onChange={handleNameChange}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-black hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            style={{ marginLeft: "300px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSchool;
