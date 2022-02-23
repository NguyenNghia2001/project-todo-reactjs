import React from "react";

import {
    Link,
    Outlet,
  } from 'react-router-dom';

export  const WorkList = () => {
    return(
        <>  
            <Link to="/todolist" className="mb-4 fs-4 text-dark  text-decoration-none text-app">Todo  List App </Link> {" "}
            <Outlet />
        </>
       
    )
}