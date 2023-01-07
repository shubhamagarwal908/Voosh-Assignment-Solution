import React from "react";

export default function BookDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const data = JSON.parse(localStorage.getItem("data"));
    if (data && data.email === email) {
      alert("Email already exists");
    } else {
      saveData(e);
      alert("Data saved successfully");
    }
  }

  // function to save form data in local storage
  const saveData = (e) => {
    e.preventDefault();
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const title = document.getElementById("title").value;
    const data = {
      name,
      email,
      company,
      title,
    };
    localStorage.setItem("data", JSON.stringify(data));
  };
  
  return (
    <div className="container__book-demo">
      <h1>Book A Demo</h1>
      <form>
        <label for="fname">
          Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          required
          type="text"
          id="fname"
          name="name"
          placeholder="Ex. John Due."
        />

        <label for="lname">
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Ex. email@company.com"
          required
        />
        <label for="lname">
          Company Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          id="company"
          name="lastname"
          placeholder="Ex. XYZ PVT LTD"
          required
        />
        <label for="lname">
          Your title <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          id="title"
          name="lastname"
          placeholder="Ex. Operational Head"
          required
        />
        <input type="button" onClick={handleSubmit}  value="Submit" />
      </form>
    </div>
  );
}
