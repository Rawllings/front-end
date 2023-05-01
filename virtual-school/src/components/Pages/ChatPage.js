import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const ChatPage = ({ coursesId, studentId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");

  
 

  const token = localStorage.getItem("jwt");

  const { id } = useParams

  // console.log(coursesId)


  const filteredMessages = messages.filter(
    (message) => message.course === coursesId
  );

  console.log(messages)



  useEffect(() => {
    // Fetch messages from the server for the current course and student
    fetch(`atPages`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // const user = {
    //     name: name,
    //   email: email,
    //   schoolId: schoolId
    // };
    // console.log(user);

    fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        student_id: student,
        course_id: course,
        message: messages,
      }),
    })
      .then((res) => res.json())
      .then((response) => console.log(response));
  }

  const renderMessage = (message) => (
    <div key={message.id}>
      <strong>{message.student_id}: </strong>
      {message.message}
    </div>
  );

  const renderMessages = () => {
    return filteredMessages.map(renderMessage);
  };

  return (
    <div>
      <h1>Course Chat</h1>
      <div>{renderMessages()}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here"
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatPage;