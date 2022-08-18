import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredTitle: event.target.value,
  //     });

  //   const amountChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredAmount: event.target.value,
  //     });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredDate: event.target.value,
  //     });
  //   };

  /* Making Sure you store prevState value when new state depend on it. An alternative to the above code for storing user inputs using One State */

  //  const titleChangeHandler = (event) => {
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle:event.target.value };
  //   };
  // }
  //  const amountChangeHandler = (event) => {
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredAmount:event.target.value };
  //   };
  // }
  //  const dateChangeHandler = (event) => {
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredDate:event.target.value };
  //   };
  // }

  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSavedExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="Number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="Date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancelClick}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
