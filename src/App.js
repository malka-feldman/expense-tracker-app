import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import React, { useState } from 'react';

const Initial_Expenses = [
{
    title: 'Car Insurance', 
    amount: 120, 
    date: new Date(2021, 2, 28)
},
{   title: 'TP', 
    amount: 345.67, 
    date: new Date(2021, 2, 28)
},
{   title: 'dress',
    amount: 240, 
    date: new Date(2021, 2, 28)
}, 
]


function App() {
  const [expenses, setExpenses] = useState(Initial_Expenses)
    const addExpenseHandler = expense => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses]
      });
    }
    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses} />
        </div>
    )
}

export default App;
