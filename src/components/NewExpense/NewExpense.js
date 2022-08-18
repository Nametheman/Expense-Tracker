import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isFormAdding, setIsFormAdding] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onExpenseEntry(expenseData);
    setIsFormAdding(false);
  };
  const startAddingHandler = () => {
    setIsFormAdding(true);
  };
  const stopAddingHandler = () => {
    setIsFormAdding(false);
  };

  return (
    <div className="new-expense">
      {isFormAdding && (
        <ExpenseForm
          onSavedExpenseData={saveExpenseDataHandler}
          onCancelClick={stopAddingHandler}
        />
      )}
      {!isFormAdding && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
