import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ExamPage = () => {
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for the exam
  const [isActive, setIsActive] = useState(true);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let interval = null;
    if (timeLeft === 0) {
      setIsActive(false);
    } else if (isActive) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [timeLeft, isActive]);

  const handleFinishExam = (event) => {
    event.preventDefault();
    submitAnswers();
  };

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const renderAnswerInputs = () => {
    const inputs = [];
    for (let i = 0; i < 1; i++) {
      // 10 questions in the exam
      inputs.push(
        <div key={i} className="flex flex-col p-10">
          <label htmlFor={`answer${i}`}>
            <span
              className="text-2xl pb-10 font-bold "
              style={{ marginLeft: "350px", paddingBottom: "20px" }}
            >
              Question:
            </span>{" "}
            {}
          </label>
          <textarea
            className="  w-1/2 p-1 bg-white border-red-400 drop-shadow-lg text-black"
            style={{ marginLeft: "350px" }}
            type="text"
            id={`answer${i}`}
            value={answers[i] || ""}
            onChange={(event) => handleAnswerChange(event, i)}
            disabled={!isActive}
          />
        </div>
      );
    }
    return inputs;
  };

  const submitAnswers = () => {
    // TODO: submit the answers to the server
    // fetch("/students", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Authorization: `Bearer ${token}`
    //   },
    //   body: JSON.stringify({
    //     student_id: student,
    //     course_id: course,
    //     message: messages,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((response) => console.log(response));
    // console.log("Answers submitted:", answers);
  };

  return (
    <div className=" bg-gray-300 h-screen">
      <NavLink to="/student">
        <h1
          className="text-5xl text-black text-center pt-5 font-bold pb-3 pl-0"
          style={{ paddingLeft: "0px" }}
        >
          V<span className="text-5xl text-orange-500 ">S </span>
        </h1>
      </NavLink>
      <div className="text-center pb-3 text-3xl text-orange-400 font-bold mt">
        <h1 className="pt-10">Exam</h1>
      </div>
      <div className="text-center pb-3 text-3xl text-orange-400 font-bold">
        <p>
          Time Left: <span className="text-black">{timeLeft} seconds</span>
        </p>
      </div>

      <form onSubmit={handleFinishExam}>
        {renderAnswerInputs()}
        {isActive ? (
          <button
            className="bg-black text-white font-bold rounded-md"
            style={{ marginLeft: "400px", padding: "5px" }}
            type="submit"
          >
            Finish Exam
          </button>
        ) : (
          <div>
            {/* {renderAnswerInputs()} */}
            <button
              type="submit"
              className="bg-orange-400 font-bold text-black rounded-md"
              style={{ marginLeft: "400px", padding: "5px" }}
              onClick={submitAnswers}
            >
              Submit Answers
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ExamPage;
