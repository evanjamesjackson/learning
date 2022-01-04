import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";

function ExpenseItem(props) {
  // In order for a React component to update dynamically, it uses the concept of "state".
  // A state change should cause the React component to be "re-evaluated" and re-drawn on the screen - it's not enough to, say, add a variable here that is updated by a function.
  // The useState function creates a special sort of variable that, when its value is changed, causes the overall React component to be re-evaluated.
  const [title, setTitle] = useState(props.title); //useState accepts an initial value as an argument, and returns an array containing a "managed" variable, as well as a callback function that can be used to set the variable. We can then use array destructuring to assign the values to our own variables.

  const clickHandler = () => {
    console.log("Clicked");
    setTitle("Updated"); // state update methods work by scheduling the update of the variable (and the re-rendering of the component)
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
