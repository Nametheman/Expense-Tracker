import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
