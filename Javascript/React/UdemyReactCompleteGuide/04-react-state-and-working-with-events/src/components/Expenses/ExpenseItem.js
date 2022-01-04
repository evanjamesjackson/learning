import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";

function ExpenseItem(props) {
  // In order for a React component to update dynamically, it uses the concept of "state".
  // A state change should cause the React component to be "re-evaluated" and re-drawn on the screen - it's not enough to, say, add a variable here that is updated by a function.
  // The useState function (called a "hook") creates a special sort of variable that, when its value is changed, causes the overall React component to be re-evaluated.

  // useState accepts an initial value as an argument and uses that to create a managed state variable.
  // It returns an array containing a "managed" variable, as well as a callback function that can be used to set the variable. We can then use array destructuring to assign the values to our own variables.
  // Also - each time this component is re-evaluated, React will recognize whether this state has been registered yet or not (i.e. an existing state, if it exists, won't be overwritten here by props.title)
  const [title, setTitle] = useState(props.title);

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
