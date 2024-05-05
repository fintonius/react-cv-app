export default function DisplayInfo({ formData }) {
   return ( 
   <div>
    <p>First Name: {formData.firstName}</p>
    <p>Last Name: {formData.lastName}</p>
    <p>Email: {formData.email}</p>
    {/* Display other form data as needed */}
  </div>
   )
}