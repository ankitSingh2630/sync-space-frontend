'use client'
import Login from '@/components/LoginPage';
import Signup from '@/components/SignupPage';
import BG from "../../public/bg.png";
import GIF from "../../public/girl.gif"; 
import { useState } from "react";

const Page = () => {

    const [linkText, setLinkText] = useState("Sign Up");
    const [form, setForm] = useState(true);
    const [gif, setGif]= useState(0)

    const handleaccount = () => {
      if (linkText === "Sign Up") {
        setLinkText("Login");
        setForm(false); // Show Create component
        setGif(prevKey => prevKey + 1); // Change the key to refresh the GIF
      } else {
        setLinkText("Sign Up");
        setForm(true); // Show Login component
        setGif(prevKey => prevKey + 1); // Change the key to refresh the GIF
      }
    };

    return (
      <div
      style={{ backgroundImage:`url('${BG.src}')` }}
    >
        <div className="container md:container md:h-screen flex flex-col md:flex-row items-center justify-center mx-auto ">
          <div className="w-full lg:w-10/12 md:flex bg-white c-pad items-center justify-between mx-auto shadow-lg ">
            <div className='w-full md:flex bg-white items-center justify-between mx-auto'>
            {/* Left Section */}
            <div className='left w-full lg:w-5/12 border-r'>
            <div 
              className="m-auto block lg:max-w-sm text-center rounded-lg bg-white bg-cover mb-4 md:mb-0 "
              style={{ minHeight: '500px' }} // Fix the height to prevent layout shifts
            >
             
              <img key={gif} src={GIF.src} className="w-full" />
              <h2 className="text-base font-normal text-black mb-2 lg:text-[18px] sm:text-sm p-2 ">
                AUTOMATE ACROSS YOUR TEAMS
              </h2>
              <p className="text-black px-3 mb-4 text-xs lg:text-xs ">
                Sync Space Empowers Everyone In Your Business To Securely Automate 
                Their Work In Minutes, Not Months. No Coding Required.
              </p>
              <button className="bg-cyan-500 text-white py-3 px-10 rounded-[5px] hover:bg-cyan-500 focus:outline-none md:w-auto text-center font-semibold text-[14px]">
                Learn More
              </button>
            </div>
            </div>

            {/* Right Section */}
            <div 
              className="w-full lg:w-7/12" 
              style={{ minHeight: '500px' }} // Add min-height here to prevent shifting
            >
              <div className="flex flex-col justify-between h-full"> 
                {/* Flex parent to ensure alignment */}
                <div>
                  {form ? <Login /> : <Signup />}
                  <div className="flex flex-row items-center my-3 px-4">
                    <hr className="flex-grow border-gray-400" />
                    <span className="px-3 text-gray-500 ">Or</span>
                    <hr className="flex-grow border-gray-400" />
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center md:px-6 px-4">

                    <button className="items-center w-full p-5 border flex gap-2 border-[#C1D5F6] text-center text-black bg-[#F2F2F2] rounded-md hover:border-slate-400 hover:shadow transition duration-150">
                      <img
                        className="w-7 h-7"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      <span className="  text-center w-full font-semibold text-[15px] ">Continue With Google</span>
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-black font-normal text-[13px]">
                    {form
                      ? "Don't have a Sync space account yet?"
                      : "Already have a Sync space account?"}{" "}
                    <a
                      onClick={handleaccount}
                      className="text-cyan-500 hover:underline cursor-pointer"
                    >
                      {linkText}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Page;