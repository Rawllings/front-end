import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ResultCard from './ResultCard';

function ViewResults() {
  const token = localStorage.getItem("jwt");
  const [results, setResults] = useState([])
  const id = useParams().examId


  useEffect(()=> {
    fetch(`/course_results/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

    } 
  }).then((res)=> res.json())
  .then((data) => setResults(data))
}, [])
  return (
    <div className="rounded-md border border-gray-300  m-3 ">
        <div className="flex flex-col">
        <div className="flex flex-row border-b bg-orange-600 border-gray-200 py-2 font-bold">
      <div className="w-1/12 px-4">No.</div>
      <div className="w-4/12 px-4">Name</div>
      <div className="w-4/12 px-4">Email</div>
      <div className="w-3/12 px-4">Results</div>
    </div>
            {
            results.map((result, index)=> (
              <ResultCard result={result} num={index} /> 
            ))
            }
        </div>
    </div>
  )
}

export default ViewResults