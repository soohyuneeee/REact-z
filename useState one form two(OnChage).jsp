import "./styles.css";
import React from "react";
export default function App() {
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: ""}
  )
  console.log(formData)
  function handleChange(event){
    setFormData(preFormData => {
      return{
        ...preFormData,
        [event.target.name]:event.target.value
      }
    })
  }
  
  return (
    <form>
      <input 
      type="text" 
      placeholder="Frist Name"
      onChange={handleChange}
      name="firstName"
      />
     <input 
     type="text" 
     placeholder="Last Name"
     onChange={handleChange}
     name="lastName"
     />
   </form>
  );
}