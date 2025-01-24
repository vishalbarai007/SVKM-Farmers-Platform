"use client";
import React, { useState } from "react";
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

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Agri-Connect
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        "Bridging Fields to Markets: Empowering Farmers, Connecting Buyers."
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
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-input"
            type="submit"
          >
            Sign up &rarr;
          </button>
        </form>
      ) : (
        <form className="my-8" onSubmit={handleOtpSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="otp">Enter OTP</Label>
            <Input
              id="otp"
              placeholder="Enter OTP"
              type="number"
              value={otp}
              onChange={handleOtpChange}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-input"
            type="submit"
          >
            Verify OTP &rarr;
          </button>
        </form>
      )}
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
