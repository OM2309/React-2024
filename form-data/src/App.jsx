import React from "react";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInput = (e) => {
    // Update the corresponding field in the state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name" // Add name attribute to identify the field
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleInput} // Use onChange instead of onClick
      />
      <label>Email</label>
      <input
        type="email"
        name="email" // Add name attribute to identify the field
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleInput} // Use onChange instead of onClick
      />
      <button>Submit</button>
    </form>
  );
};

export default App;
