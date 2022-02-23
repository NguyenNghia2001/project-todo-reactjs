import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
// import boostrap 
import 'bootstrap/dist/css/bootstrap.css';
import './css/todolist.css';
import  {ToDoList}  from './components/TodoList/todolist';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="todolist"
         element={<ToDoList />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
  );
