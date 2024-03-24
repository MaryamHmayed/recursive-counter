import React from "react";
import  "./style.css";
import {  useState } from "react";

const RecursiveCounter = (number,onChange) => {
    const [children,setChildren]=useState([])

    const addChild=()=>{
        const new_number = number + 1;
        onChange(new_number);
        setChildren([...children, <RecursiveCounter key={new_number} number={new_number} onChange={onChange} />]);
        } ;
    const removeChild = () => {
        const new_number = number - 1;
        onChange(new_number);
        setChildren(children.slice(0, (children.length-1)));
        };
    

    return (
      <>
      <div>
        <button onClick={addChild}>+</button>
        <button onClick={removeChild}>-</button>
        {number}
      </div>
      <div>
        {children}
      </div>
      </>
    )

}

export default RecursiveCounter;