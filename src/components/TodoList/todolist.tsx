import { type } from 'os';
import React, { Component, useEffect, useState } from 'react';

type Todo = {
  id : number;
  task : string;
  isCompleted : boolean;
}


export const ToDoList = () => {

  const [todos , setTodos] = useState<Todo[]>([]);
  const [task , setTasks] = useState<string>("");

  // xử lý lấy dữ liệu từ input
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTasks(event.target.value);
  }

// create a new todo
  const todo: Todo = {
    id: Date.now(),
    task : task,
    isCompleted : false,
  }
  // xủ xý submit form
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
     // check value if value empty
     if(task.trim().length == 0){
      alert("Please enter task!");
      return;
    }
    setTodos([todo, ...todos]); // add todo to the state
    setTasks("");
  }

  useEffect(() => {
    if(todos.length > 0){
      sessionStorage.setItem(JSON.stringify(todo.id), JSON.stringify(todos));
    }
  },[todos]);
  var data = sessionStorage.getItem(JSON.stringify(todos))
  console.log(data)

  const handleChangeChecked = (todo : Todo) => {
    // lấy chỉ số cần làm việc 
    const index  = todos.indexOf(todo);
    // thay đổi trạng thái của task
    todo.isCompleted = !todo.isCompleted;
    // thay đổi vị tri của từng task khi được add vào 
    todos.splice(index , 1 , todo);
    // cập nhật lại state
    setTodos([...todos]);

  }

  const handleDelete = (id : number) => {
    // tìm kiếm id của của task đó 
    const index = todos.findIndex((todo) => todo.id === id)
    // delete todo 
    todos.splice(index , 1);
    // update state
    setTodos([...todos]);
  }

  return (
    <div className='m-5'>
      <form onSubmit={handleFormSubmit} className="form-submit">
          <input 
            type="text"
            placeholder='Enter Task'
            className='inputTask'
            name = "task" 
            value={task} 
            onChange = {handleInput}
          />
          <button type='submit' className=' snip1547'> <span>Add</span></button>
      </form>
      <ul className="itemList">
        {todos.map((todo) => (
          <li key={todo.id} className="item">
            <div className='checkbox'>
               <input type="checkbox"  onChange = {() => handleChangeChecked} className="form-check-input" />
            </div>
            <div className='contentTask'>
               {todo.task}
            </div>
            <div className='btnClick'>
               <button onClick={() => handleDelete(todo.id)} className="btn btn-outline-danger">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}