import { useState } from "react";
import "./styles/utilities.css";
import "./styles/colors.css";
import RecursiveCounter from "./pages/RecursiveCounter";



const App =()=> {
  const [number,setNumber]=useState(1)

  const checkChange = (new_number) => {
    setNumber(new_number);}


  return (
    <div className="App"> 
      <h1>Recursive Counter</h1>
      <RecursiveCounter  number={number} onChange={checkChange}/>
  
    </div>
  );
}

export default App;
