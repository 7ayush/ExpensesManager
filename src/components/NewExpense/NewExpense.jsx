import React,{useState} from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'


const NewExpense = (props) => 
{
    const [isEditing,setIsEditing]=useState(false);
    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
    // let editingExpense=<button onClick={startEditingHandler}>Add New Expense</button>
    // if(isEditing)
    // {
    //     editingExpense=<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    // }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);    
        console.log(expenseData);
    };
    return (
        <div className='new-expense'>
        {/* {editingExpense} */}
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}     
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}

        </div>
    );
};

export default NewExpense;
