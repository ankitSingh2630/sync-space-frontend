'use client'
import React, { useState } from 'react';

const Password = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendVerification = async () => {
        if (!email) {
            setMessage('Please enter your email address.');
            return;
        }

        try {
            // Simulate API call for Gmail verification
            // Replace with your actual API integration
            setMessage('Verification link sent to your email!');
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center text-cyan-600">Forgot Password?</h1>
                <p className="text-sm text-black mb-4 text-center">Enter your Gmail address to receive a verification link.</p>
                <input
                    type="email"
                    placeholder="Enter your Gmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border-[#bebebe] border bg-[#F4F4F4] rounded-lg focus:outline-none focus:ring-2  focus:ring-cyan-500 text-black"
                />
                <button
                    onClick={handleSendVerification}
                    className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-cyan-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                    Send Verification Link
                </button>
                {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
            </div>
        </div>
    );
};

export default Password;























// import React from "react";
// import { useState } from "react";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSendVerification = () => {
//     if (email) {
//       // Simulate API call
//       setMessage("A verification email has been sent to your Gmail.");
//     } else {
//       setMessage("Please enter a valid email address.");
//     }
//   };

// };

// export default function Password(){
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4 text-cyan-600">Forgot Password?</h2>
//         <p className="text-black text-center mb-6 text-sm">
//         No problem, Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
//         </p>
//         <input
//           type="email"
//           placeholder="Enter your Gmail address"
//           value={email}
//           onChange={handleEmailChange}
//           className="w-full px-4 py-2 border-[#bebebe] border bg-[#F4F4F4] rounded-lg focus:outline-none focus:ring-2  focus:ring-cyan-500"
//         />
//         <button
//           onClick={handleSendVerification}
//           className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-cyan-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         >
//           Send Verification
//         </button>
//         {message && (
//           <p className="text-center text-sm text-gray-700 mt-4">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

