import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const ADDED_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(ADDED_EXPENSE);

  const addExpenseHandler = (expense) => {
    // console.log("In-App.js");
    // setExpenses([expense, ...ADDED_EXPENSE]);
    /* the above code will not work since our state is depending on another state. */
    /* we should update the state using the below one-state method */
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onExpenseEntry={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
