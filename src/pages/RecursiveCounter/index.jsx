import React, { useState } from "react";
import "./style.css";

const RecursiveCounter = ({ initialValue }) => {
  const [number, setNumber] = useState(initialValue);
  const [children, setChildren] = useState([]);

  const addChild = () => {
    
    if (children.length > 0) {
      setNumber(prevNumber => prevNumber - 1); 

    }
    let newNumber = number;
    setChildren(prevChildren => [
      ...prevChildren,
      <RecursiveCounter key={newNumber} initialValue={newNumber} />
    ]);
  };

  const removeSelf = () => {
    setChildren(prevChildren => prevChildren.filter((_, index) => index !== prevChildren.length - 1));
  };

  return (
    <div>
      <div>
        {number}
        <button onClick={addChild}>+</button>
        {children.length > 0 && <button onClick={removeSelf}>-</button>}
      </div>
      <div style={{ marginLeft: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default RecursiveCounter;