import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const addNewExpenseHandler = (expenseData) => {
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler}></NewExpense>
      <Expenses></Expenses>
    </div>
  );
};

export default App;
