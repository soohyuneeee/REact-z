import "./styles.css";
import React from "react";
export default function App() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  console.log(firstName,lastName);
  function handleChange2(event){
    setLastName(event.target.value)
  }
  function handleChange(event){
    setFirstName(event.target.value)
  }
  return (
    <form>
      <input 
      type="text" 
      placeholder="Frist Name"
      onChange={handleChange}
      />
     <input 
     type="text" 
     placeholder="Last Name"
     onChange={handleChange2}
     />
   </form>
  );
}