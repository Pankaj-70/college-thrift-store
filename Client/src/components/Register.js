import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUniversity,
  FaIdCard,
  FaPhone,
  FaHome,
  FaCity,
  FaMapMarkedAlt,
  FaMapPin,
} from "react-icons/fa";

const InputField = ({
  icon,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div>
    <div className="flex items-center border rounded-lg bg-gray-100 px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
      <div className="text-gray-400 mr-2">{icon}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none w-full text-gray-700"
      />
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    college: "",
    collegeId: "",
    phoneNo: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    fullName: "",
    college: "",
    collegeId: "",
    phoneNo: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const errors = {};
    let isValid = true;

    // Check for empty fields
    for (const field in formData) {
      if (formData[field] === "") {
        errors[field] = "This field is required";
        isValid = false;
      }
    }

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    // Send a POST request to register the user
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/users/register`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    if (response.ok) {
      // Redirect to the login page after successful registration
      navigate("/login");
    } else {
      toast.error(data.message, {
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-yellow-200 to-blue-300">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <InputField
                required
                icon={<FaUser />}
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                error={formErrors.fullName}
              />
              <InputField
                required
                type="email"
                icon={<FaEnvelope />}
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
              />
              <InputField
                required
                icon={<FaLock />}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                error={formErrors.password}
              />
              <InputField
                required
                icon={<FaUniversity />}
                name="college"
                placeholder="College"
                value={formData.college}
                onChange={handleChange}
                error={formErrors.college}
              />
              <InputField
                required
                icon={<FaIdCard />}
                name="collegeId"
                placeholder="College ID"
                value={formData.collegeId}
                onChange={handleChange}
                error={formErrors.collegeId}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <InputField
                required
                icon={<FaPhone />}
                name="phoneNo"
                placeholder="Phone Number"
                value={formData.phoneNo}
                onChange={handleChange}
                error={formErrors.phoneNo}
              />
              <InputField
                required
                icon={<FaHome />}
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                error={formErrors.address}
              />
              <InputField
                required
                icon={<FaCity />}
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                error={formErrors.city}
              />
              <InputField
                required
                icon={<FaMapMarkedAlt />}
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                error={formErrors.state}
              />
              <InputField
                required
                icon={<FaMapPin />}
                name="zipCode"
                pattern="\d{6}"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleChange}
                error={formErrors.zipCode}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-yellow-600 font-medium hover:underline"
          >
            Login here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
