
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };
    
    if (!formData.email) {
      valid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      valid = false;
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      valid = false;
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="flex w-full max-w-4xl shadow-lg bg-white rounded-lg">
        <div className="hidden md:block">
          <Image
            src="/img/hero4.jpg"
            alt="Login"
            width={500}
            height={500}
            className="rounded-l-lg w-full h-auto mt-14 mx-3 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-6">
            <Image src="/register/Bandage.png" alt="E-commerce Logo" width={120} height={40} className="mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            <br />
            <a href="/register" className="text-sm text-blue-500 hover:underline pt-2">Don’t have an account? Register</a>
          </div>
          <div className="flex justify-center mt-6 space-x-5">
            <button className="flex items-center justify-center bg-red-500 text-white py-3 px-3 rounded-full hover:bg-red-600 transition duration-200">
              <FaGoogle size={24} />
            </button>
            <button className="flex items-center justify-center bg-blue-700 text-white py-3 px-3 rounded-full hover:bg-blue-800 transition duration-200">
              <FaFacebook size={24} />
            </button>
            <button className="flex items-center justify-center bg-gray-800 text-white py-3 px-3 rounded-full hover:bg-gray-900 transition duration-200">
              <FaGithub size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
