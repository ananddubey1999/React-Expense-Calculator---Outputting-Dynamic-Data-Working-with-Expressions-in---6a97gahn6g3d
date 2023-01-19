import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  
  const handleExpenseInput = (e) => {
    const [name, price] = e.target.value.split('-');
    const newExpense = {
      name: name,
      price: Number(price)
    }
    setExpenses([...expenses, newExpense]);
  } 
  
  const handleExpenseButton = () => {
    const totalPrice = expenses.reduce((acc, curr) => acc+curr.price, 0);
    setTotal(totalPrice);
  }
  
  return (
    <div id="main">
      <input id="expense-input" onChange={handleExpenseInput}/>
      <button id="expense-button" onClick={handleExpenseButton}>Add Expense</button>
      <div id="expense-list">
        {
          expenses.map((expense, index) => (
            <p key={index}>{expense.name} - {expense.price}</p>
          ))
        }
      </div>
      <div id="total-expense">
        Total Expense: {total}
      </div>
    </div>
  )
}


export default App;
