"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../Support/label";
import { Input } from "../Support/input";
import { cn } from "../../../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";

export function SignupFormDemo() {
  // State variables for form data and OTP
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpStep, setIsOtpStep] = useState(false);

  // Handle input changes for form data
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle OTP input changes
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Simulate sending OTP
    // Replace this with an actual API call to send OTP
    console.log("Sending OTP to:", formData.contact);

    // Move to OTP step
    setIsOtpStep(true);
  };

  // Handle OTP verification
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log("OTP entered:", otp);

    // Verify OTP (API call can be made here)
    // Example: await fetch('/api/verify-otp', { method: 'POST', body: JSON.stringify({ otp }) });

    alert("OTP verified successfully! Signup complete.");
  };

  useEffect(() => {
    setupRecaptcha();
  }, []);

  return (
    <div
      className={`max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input ${context.theme === 'dark' ? 'bg-black' : 'bg-white'}`}
    >
      <h2 className={`font-bold text-xl ${context.theme === 'dark' ? 'dark:text-neutral-200' : 'text-neutral-800'}`}>
        Welcome to Agri-Connect
      </h2>
      <p className={`text-sm max-w-sm mt-2 ${context.theme === 'dark' ? 'dark:text-neutral-200' : 'text-neutral-600'}`}>
        Login to aceternity if you can because we don&apos;t have a login flow yet
      </p>

      {!isOtpStep ? (
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Ram-lal"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Chaurasiya"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="contact">Contact No.</Label>
            <Input
              id="contact"
              placeholder="7709******"
              type="number"
              value={formData.contact}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </LabelInputContainer>
          

          <button
            className={`bg-gradient-to-br relative group/btn ${context.theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'} block w-full ${context.theme === 'dark' ? 'text-white' : 'text-black'} rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]`}
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className={`relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input ${context.theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-200'} dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]`}
              type="submit"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-500" />
              <span className={`${context.theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'} text-sm`}>
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      ) : null}
    </div>
  )
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
