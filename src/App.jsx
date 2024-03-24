import { useState } from "react";
import "./styles/utilities.css";
import "./styles/colors.css";
import RecursiveCounter from "./pages/RecursiveCounter";



const App =()=> {
   

  return (
    <div className="App"> 
      <h1>Recursive Counter</h1>
       <RecursiveCounter  initialValue={-1}  /> 
  
    </div>
  );
}

export default App;
