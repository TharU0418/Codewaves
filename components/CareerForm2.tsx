'use client';

import { useState } from "react";

const CareerForm2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [link, setLink] = useState('');
  const [position, setPosition] = useState('');
  const [cv, setCv] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async() => {
    console.log(name)
    const values =  {name, email, mobileNumber, link, position, cv, message}
    console.log('values', values)

    // const response = await fetch("/api/form", {
    //   method:'POST',
    //   headers:{
    //     'Content-Type' : 'application/json',
    //   },
    //   body:JSON.stringify(values)
    // });
    // if(!response.ok){
    //   throw new Error('Network response was not ok');
    // }
    // const data = await response.json();
    // console.log('Sunmited.', data)
  }

  return (

   
    <div className="flex justify-center items-center min-h-screen">

    <div className="bg-red-400 mt-6 mb-6  p-8  text-center w-10/12">
      <h3 className="text-3xl font-bold mb-4 text-center">Send your resume to us</h3>

      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Full Name" 
        className="bg-transparent placeholder-black w-8/12 text-black border-black border-b-2 mb-6 focus:outline-none focus:border-transparent" 
        required 
        onChange={(e) => setName(e.target.value)}
      />

      <input 
        type="email" 
        placeholder="Email" 
        className="bg-transparent placeholder-black w-8/12 text-black border-black border-b-2 mb-6 focus:outline-none focus:border-transparent" 
        required 
        onChange={(e) => setEmail(e.target.value)}
      />

      <input 
        type="tel" 
        placeholder="Mobile Number" 
        className="bg-transparent placeholder-black w-8/12 text-black border-black border-b-2 mb-6 focus:outline-none focus:border-transparent" 
        required 
        onChange={(e) => setMobileNumber(e.target.value)}
      />

      <input 
        type="text" 
        placeholder="Portfolio Link" 
        className="bg-transparent placeholder-black w-8/12 text-black border-black border-b-2 mb-6 focus:outline-none focus:border-transparent" 
        required 
        onChange={(e) => setLink(e.target.value)}
      />

      <input 
        type="text" 
        placeholder="Position" 
        className="bg-transparent placeholder-black w-8/12 text-black border-black border-b-2 mb-6 focus:outline-none focus:border-transparent" 
        required 
        onChange={(e) => setPosition(e.target.value)}
      />

      <br/>
      {/* <label className="text-left font-bold mb-2">Upload your CV</label>  */}

      <div className="flex flex-col items-center justify-center bg-red-300 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <label className="font-bold text-black mb-4 text-lg">Upload Your CV</label>
      
      <div className="relative w-full h-18 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-blue-500 transition duration-300 ease-in-out">
        <input
          type="file"
          className="absolute inset-0 w-full h-10 opacity-0 cursor-pointer"
          required
          onChange={(e) => setCv(e.target.files[0])}
        />
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
          <p className="text-black text-lg mt-2">
            {cv ? cv.name : 'Drag & Drop your file here or click to browse'}
          </p>
        </div>
      </div>

      {cv && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">File selected:</p>
          <p className="font-medium text-gray-900">{cv.name}</p>
        </div>
      )}

      {/* <button
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        type="submit"
      >
        Upload CV
      </button> */}
    </div>

      <input 
        type="text" 
        placeholder="Message" 
        className="bg-transparent placeholder-black w-8/12 text-black border-black border-b-2 mb-6 focus:outline-none focus:border-transparent" 
        required 
        onChange={(e) => setMessage(e.target.value)}
      />
      <br/>

<button className="bg-white text-red-800 p-4 rounded-md font-bold	">SUBMIT</button>

      </form>
    </div>
    </div>
  );
}

export default CareerForm2;