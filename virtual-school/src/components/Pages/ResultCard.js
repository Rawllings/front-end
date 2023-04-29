import React, { useState } from 'react'

function ResultCard({result, num}) {
  const token = localStorage.getItem("jwt")
  const [showResult, setShowResult] = useState(false)


  function handleClick() {
    setShowResult(!showResult) 
  }


  function handleUpdate(e) {
    e.preventDefault()
    const score = parseInt(e.target.score.value);
    console.log(score)
    fetch(`/results/${result.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(score)
    })
    .then((res)=>res.json())
    .then((data)=> console.log(data))
  }
  return (
     
    <div className='border border-gray-200 rounded-lg shadow-md my-2'>
      <div className='flex flex-row border-b border-gray-200 py-2'>
        <div className='w-1/12 px-4'>{num + 1}</div>
        <div className='w-4/12 px-4'>{result.student.student_name}</div>
        <div className='w-4/12 px-4'>{result.student.email}</div>
          <div className='w-3/12 px-4'>
            <button className="bg-green-500 hover:bg-orange-500 text-white rounded-md py-2 px-4" onClick={handleClick}> View Answer</button>
          </div>
      </div>
      { showResult && (

<div className='flex flex-wrap mt-4 mb-4'>
<div className='w-2/3 px-4'> 
  <div className='container bg-yellow-400 border border-sk-500 rounded-md p-4'>
    {result.answers}
  </div>
</div> 
<div className='w-1/3 px-4'>
  <form className="bg-gray-100 rounded-md p-4" onSubmit={handleUpdate}>
    <label className="block mb-2 font-bold text-gray-700" htmlFor="score">
      Current Score: {result.score}
    </label>
    <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:shadow-outline" id="score" type="number" placeholder="Give score" />
    <button className="bg-green-500 hover:bg-green-700 mx-auto text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="submit" >
      Issue Score
    </button>
  </form>
</div>
</div>


) }
    </div>
    )}

export default ResultCard