// import React from 'react'
// import { SignupFormDemo } from '../components/AceternityComponents/main/SignUpForm'

import { useState } from "react"
import { SignupFormDemo } from "../Components/Aceternity/Main/SignupForm"
import React from "react"
import { SigninFormDemo } from "../Components/Aceternity/Main/SigninForm"

const Login = () => {

  let [Mode, setFormMode] = useState("SignUp")
  const changeMode = () => {
    setFormMode(Mode === "SignUp" ? "SignIn" : "SignUp")
  }



  if (Mode === "SignUp") {
    return (
      <>
        <div className="h-screen w-full bg-zinc-950 flex justify-center items-center flex-col ">
          <SignupFormDemo />
          <p
            className="text-white absolute z-20  bottom-[6%] 
     sm:bottom-[20%] 
     md:bottom-[10%] 
     xl:bottom-[13%] "
          >
            Didn't have an Account?{" "}
            <a
              className="text-blue-600 cursor-pointer"
              onClick={changeMode}
            >
              Sign In
            </a>
          </p>

        </div>
      </>
    )
  }
  else {

    return (
      <div className="h-screen w-full bg-zinc-950 flex justify-center items-center flex-col -z-30">
        {/* <BackgroundBeamsWithCollision children={undefined} /> */}
        <SigninFormDemo />
        <p
          className="
    absolute text-white 
     bottom-[20%] 
    sm:bottom-[20%] 
     md:bottom-[15%] 
    xl:bottom-[17%] 
    z-50
  "
        >
          Already have Account?{" "}
          <a
            className="text-blue-600 cursor-pointer"
            onClick={changeMode}
          >
            Sign Up
          </a>
        </p>
      </div>

    )

  }
}

export default Login;