import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // We could use multiple states here, one for each field
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Alternatively, we can use one state to manage all three
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // By default (i.e. as part of vanilla JS), functions assigned as event handlers receive an event object
  const titleChangeHandler = (event) => {
    // When using a combined state where we only want to update , it is recommended to pass a function to the set function.
    // This is because we only want to update one part of that state (in this case, the title), and therefore need to keep the rest of the state as is.
    // Passing the previous/updated values to the set function directly may result in us using an out-of-date previous state, due to the way React schedules
    // state updates.
    // setUserInput((prevState) => {
    //   // React will guarantee that the prevState object is an up-to-date version of the state
    //   return { ...prevState, title: event.target.value };
    // });
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   // React will guarantee that the prevState object is an up-to-date version of the state
    //   return { ...prevState, amount: event.target.value };
    // });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   // React will guarantee that the prevState object is an up-to-date version of the state
    //   return { ...prevState, date: event.target.value };
    // });
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // we call this to prevent the page from reloading when the form is submitted
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    // Clear the form after the user submits
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onSaveExpenseData(expenseData); // child-to-parent communication
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // two-way binding allows us to set the value of a component...
            onChange={titleChangeHandler} // ...and listen to changes to the value of that component
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
