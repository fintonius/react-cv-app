import React from "react";

export default function DisplayInfo({ formData }) {
    <div>
    <h2>CV Preview</h2>
    <p>First Name: {formData.firstName}</p>
    <p>Last Name: {formData.lastName}</p>
    <p>Email: {formData.email}</p>
    {/* Display other form data as needed */}
  </div>
}