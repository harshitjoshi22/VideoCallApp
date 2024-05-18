import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Style.css';

const HomePage = () => {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler=()=>{
       navigate(`/room/${input}`)
  }
  return (
    <div className='home'>
      <div className='container'>
        <input value={input} className='search-input' onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your name..' />
        <button className='search-button' onClick={submitHandler}> Join us </button>
      </div>
    </div>
  )
}

export default HomePage



