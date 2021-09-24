import "./ExpenseItem.css";

// Our first component. A component in React is really just a special Javascript function written with JSX (Javascript with XML, or HTML)
function ExpenseItem() {
  return (
    // Note that React components must only have one root element

    // Since this isn't really HTML, some of the keywords aren't quite the same. For instance - we have to use className instead of class
    // for CSS classes, since class itself is a reserved Javascript keyword.
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
