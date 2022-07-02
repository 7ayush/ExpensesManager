import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";


const ExpensesList = (props) => {
  if(props.items.length === 0) {
    return <h2 className="expense-list__fallback">Found no expenses</h2>
  }
  let data=props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
   return (
    <ul className="expenses-list">
    {data}
    </ul>
   )
    
  
};

export default ExpensesList;
