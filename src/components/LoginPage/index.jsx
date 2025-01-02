"use client"; 
import { CiRead } from "react-icons/ci";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
;

export default function Login() {
  const [email, setEmail] = useState(''); // Fixed from setUsername to setEmail
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to display error message
  const router = useRouter();
  const [show,setShow] = useState(false)

  const handleClick = ()=>{
    setShow(!show)
  }

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {

      const response = await axios.post('https://stag.syncspace.com/api/synclogin', 
        { email, password }, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,  // This ensures that cookies or credentials are sent
        }
      );
    
      if(Response) {
        console.log('Login response:', response.data);
        // console.log(response.headers);
      //  localStorage.setItem('username', response.data.user.name);
      //  localStorage.setItem('email', response.data.user.email);
        router.push('/home');


      }
      console.log('Login response:', response.data);
      alert('Login successful');
      // router.push('/home');

      // Optionally, store the token for future requests
      

    } catch (error) {
      console.log('Login error:', error);
      setError('Invalid email or password. Please try again.');
      // setEmail('')
      // setPassword('')
    }
  };

  return (
    <div className="flex justify-center items-center pt-4 px-4 md:px-0 ">
      <div className="w-full rounded-lg md:px-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-black text-left ">
          Log In
        </h2>
        <p className="text-[15px] text-black text-left mb-6 py-2">
          To Access Sync Space Home
        </p>

        {error && (
          <div className="text-red-500 text-base font-medium mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mt-2 " >
            <input
              type="email"
              placeholder="Email Address Or Mobile Number"
              className="border-[#bebebe] border bg-[#F4F4F4] text-[15px] p-3 md:py-6 md:px-2 w-full rounded-sm focus:outline-none focus:border focus:border-[#bfbfbf] text-black"
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>

          <div className=" relative mt-2 ">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className=" relative
              border-[#bebebe] border  bg-[#F4F4F4] text-[15px] p-3 md:py-6 md:px-2 w-full rounded-sm focus:outline-none focus:border focus:border-[#bfbfbf] text-black"
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <span onClick={handleClick}
            className="absolute flex items-center 
            m-auto  right-3 top-0 bottom-0
            text-2xl cursor-pointer text-[#bebebe] hover:text-cyan-500"><CiRead ></CiRead></span>
          </div>
          <div className="mt-2 mb-2 text-left">
            <span className="text-cyan-500 text-sm md:text-sm cursor-pointer hover:underline">
              Forgot password?
            </span> 
          </div>

          <div className="mt-2 py-1">
            <button
              type="submit"
              className="bg-cyan-500 text-white text-sm text-30px font-medium w-full p-5 md:p-6 rounded-sm hover:bg-cyan-600 transition duration-300
              focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
