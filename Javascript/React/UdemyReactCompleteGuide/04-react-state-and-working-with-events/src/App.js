import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses></Expenses>
    </div>
  );
};

export default App;
