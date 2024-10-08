import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuoteForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose(); // Close form if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please provide your requirements";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Display success toast first and wait 3 seconds
      toast.success("Form submitted successfully!", {
        position: "top-right", // Display success toast notification
        autoClose: 3000, // Close after 3 seconds
      });

      // Wait for the toast duration before closing the form (3 seconds)
      setTimeout(() => {
        onClose(); // Close the form after 3 seconds
      }, 3000); // Close after 3 seconds (3000ms)
    } else {
      setErrors(formErrors); // Display error messages directly in the form
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div
        ref={formRef}
        className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-lg mx-auto"
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">Request a Quote</h2>
          <button
            onClick={onClose}
            className="text-3xl w-7 h-7 flex items-center justify-center hover:bg-red-500 hover:text-white text-red-500 transition-all duration-500 rounded"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Requirements Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Your Requirements
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your requirements"
            />
            {errors.requirements && (
              <span className="text-red-500 text-sm">
                {errors.requirements}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* React Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default QuoteForm;
