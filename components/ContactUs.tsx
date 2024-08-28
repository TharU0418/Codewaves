'use client';
import React, { useState } from "react";
import SendEmail from "./SendEmail";
//import { contactConfig } from "../content_option";

export default function ContactUs() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  const handlEBtn = (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    const values = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      message: message
    }
  
    const emailData = {
      to_name: email,
      from_name: email,
      message: values,
    }
  
    SendEmail(emailData);
  }
  

  return (
    <div className="container mx-auto px-4 py-10 bg-black rounded-2xl h-560" style={{width:'88%'}}>

      <div className="flex flex-wrap gap-8">
           <div className="w-full text-center flex items-center mt-6">
          
          <form className="contact__form w-full">
          <div className="text-6xl font-bold mb-4 text-center text-white">Contact Us</div>
          <h5 className="text-white text-center text-2xl mb-4">
            If your looking for great team to complete your project, fill out the form we are connect with you write away
          </h5>

            <div className="flex flex-wrap -mx-2">
              
              <div className="w-full lg:w-1/2 px-2 mb-8 mt-4">
                <input
                  className="form-control border border-gray-300 rounded p-2 w-full mt-4 h-14"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  required
                  onChange = {(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full lg:w-1/2 px-2  mb-8 mt-4">
                <input
                  className="form-control border border-gray-300 rounded p-2 w-full mt-4 h-14"
                  id="mobile_num"
                  name="mobile_num"
                  placeholder="Mobile Number"
                  type="text"
                  required
                  onChange = {(e) => setMobileNumber(e.target.value)}
                />
              </div>
              
            </div>
            <div className="w-full lg:w-1/2 px-2  mb-8 mt-4">
                <input
                  className="form-control border border-gray-300 rounded p-2 w-full mt-4 h-14"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                  onChange = {(e) => setEmail(e.target.value)}
                />
              </div>
            <textarea
              className="form-control border border-gray-300 rounded p-2 w-full mt-4 mb-8"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              required
              onChange = {(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <div className="w-full px-2 mb-4 mt-6">
            <button className="bg-white text-black font-bold py-2 p-6 text-xl px-4 rounded h-14" type="button" onClick={handlEBtn}>
  SUBMIT
</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
