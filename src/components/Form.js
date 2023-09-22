import React, { useState } from "react";
import styled from "styled-components";

const Styles = styled.div` 
 background: rgba(0, 0, 0,0.3);
 padding: 20px;
 border-radius: 10px;

 h1 {
    background-color: rgb(0,0,0,0.7);
   border-bottom: 1px solid white;
   color: #fff;
   font-family: consolas;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }
 select {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }
 textarea {
    border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
   height: 100px;
 }

 label {
   color: #fff;
   display: block;
   font-family: consolas;
   margin-top: 5px;
font-size: 20px; /* Increase font size */
  font-weight: bold; /* Use a bold font weight */
  color: #000; /* Set a font color */
  padding: 5px 10px; /* Add padding */
 text-shadow: 1px 1px 1px rgba(255, 255, 255,0.2); /* Text shadow for depth */
  transition: background-color 0.2s; /* Add a hover effect */
 }
label:hover {
  background-color: rgb(255,255,255,1.0); /* Change background color on hover */
  border-radius: 4px;
}
 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: rgb(10,95,196);
   color: #fff;
   font-family: consolas;
   font-size: 14px;
   font-weight: bold;
   margin: 20px 0px;
`;

function Form() {
    // converting desc data into json object
    const [desc, setDesc] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        // Get the current value of 'desc' from the textarea
        const currentDescValue = document.getElementById("desc").value;

        // Update the 'desc' state with the current value
        setDesc(currentDescValue);

        // Create the JSON object with the updated 'desc' value
        const data = { desc: currentDescValue };
        console.log(data);
    };
    
// Suspect 20:

// Gender: Female
// Age: Early 40s
// Face Shape: Square
// Skin: Tanned with minimal makeup
// Eyes: Hazel, almond-shaped
// Hair: Shoulder-length, blonde, and wavy
// Notable Features: Glasses and a small scar on the chin
// Attire: Blouse and slacks
  return (
    <>
      <h1>Report a Suspect</h1>
      {/* <label>Gender</label>
      <select name="gender" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label>Age</label>
      <select name="age" id="age">
        <option value="0-20">0-20</option>
        <option value="20-30">20-30</option>
        <option value="30-40">30-40</option>
        <option value="40-50">40-50</option>
        <option value=">50">greater than 50</option>
      </select>
      <label>Face Shape</label>
      <select name="faceshape" id="faceshape">
        <option value="square">Square</option>
        <option value="circle">Circle</option>
        <option value="oval">Oval</option>
        <option value="heart">Heart</option>
        <option value="round">Round</option>
        <option value="triangle">Triangle</option>
        <option value="diamond">Diamond</option>
        <option value="rectangle">Rectangle</option>
      </select>
      <label>Date</label>
      <input name="date" type="date" />
      <label>Skin</label>
      <input name="skin" type="text" placeholder="Tanned with minimal makeup" />
      <label>Eyes</label>
      <input name="eyes" type="text" placeholder="Hazel, almond-shaped" />
      <label>Hair</label>
      <input
        name="hair"
        type="text"
        placeholder="Shoulder-length, blonde, and wavy"
      />
      <label>Attire</label>
      <input name="attire" type="" placeholder="Blouse and slacks" /> */}
      {/* <label>Description</label> */}
      <textarea
        id="desc"
        name="desc"
        placeholder="Glasses and a small scar on the chin..."
      />

      <input onClick={handleSubmit} type="submit" className="submitButton" />
    </>
  );
}

export default function App() {
  return (
    <Styles>
      <Form />
    </Styles>
  );
}
