import React, { useEffect, useState } from "react";
import LoginDashboard from "./LoginDashboard";
import StudentSideBar from "./StudentSideBar";
// import CardCourse from "./CardCourse";
// import Examcards from "./Examcards";
import ChatCards from "./ChatCards";

function Chat() {
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

  // const [StudentId, setStudentId] = useState();
  const [courses, setCourses] = useState([]);
  const [chats, setChats] = useState([]);
  // const [enrollment, setEnrollment] = useState([]);
  const token = localStorage.getItem("jwt");
  // const email = sessionStorage.getItem("email");

  // console.log(enrollment)
  console.log(chats);

  useEffect(() => {
    fetch("/loggedin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        console.log(data.student.id);
        fetch(`/student_courses/${data.student.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setCourses(data));
      });
  }, [token]);

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="flex">
            {/* <StudentDashboard /> */}

            <div
              className="text-3xl"
              style={{
                text: "center",
                paddingTop: "200px",
                paddingLeft: "500px",
              }}
            >
              <div className="flex flex-wrap justify-center">
                {courses.map((course) => (
                  <ChatCards
                    key={course.course.course_name}
                    courseId={course.course.id}
                    name={course.course.course_name}
                  />
                ))}
              </div>
            </div>

            {/* SIDE BAR  */}
            <StudentSideBar />
          </div>
        </>
      ) : (
        <>
          <div
            className="text-5xl"
            style={{
              text: "center",
              paddingTop: "200px",
              paddingLeft: "500px",
            }}
          >
            <h1> Login to access exams</h1>
          </div>
          <LoginDashboard />
        </>
      )}
    </>
  );
}

export default Chat;
