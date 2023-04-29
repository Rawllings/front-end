import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  EducatorExamCard from "./EducatorExamCard";

function DisplayExams() {
    const id = useParams().courseId
    const token = localStorage.getItem("jwt");
    const [exams, setExams] = useState([])
    useEffect(() => {
        fetch(`/course_exams/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
        })
        .then((res)=> res.json())
        .then((data)=> setExams(data))
    }, [])
    console.log(exams)
  return (
    <div className='flex flex-wrap mx-auto'>
        {exams.map((exam)=>(
          <EducatorExamCard exam={exam} courseId={id}/>
        ))}
    </div>
  )

}

export default DisplayExams