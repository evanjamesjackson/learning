import "./ExpenseItem.css";

// Our first component. A component in React is really just a special Javascript function written with JSX (Javascript with XML, or HTML)
function ExpenseItem() {
  // We can refer to Javascript variables within our HTML code using the {variableName} syntax
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    // Note that React components must only have one root element

    // Since this isn't really HTML, some of the keywords aren't quite the same. For instance - we have to use className instead of class
    // for CSS classes, since class itself is a reserved Javascript keyword.
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
