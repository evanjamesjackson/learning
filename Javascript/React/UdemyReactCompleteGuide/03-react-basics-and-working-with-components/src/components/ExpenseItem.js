import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// Our first component. A component in React is really just a special Javascript function written with JSX (Javascript with XML, or HTML)
function ExpenseItem(props) {
  // props ("properties") are how we pass data between components

  return (
    // Note that React components must only have one root element

    // Since this isn't really HTML, some of the keywords aren't quite the same. For instance - we have to use className instead of class
    // for CSS classes, since class itself is a reserved Javascript keyword.
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
