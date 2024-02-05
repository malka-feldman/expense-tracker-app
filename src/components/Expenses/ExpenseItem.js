import ExpenseDate from '../Expenses/ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React, { useState } from 'react';



const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle((prevTitle) => {
            console.log('Updated title:', prevTitle);
            return 'updated!';
        });
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"> 
                <h2>{title}</h2> {/* Use the updated state directly */}
                <div className="expense-item__price">{props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;