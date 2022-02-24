import React from "react";

import {
    Link,
    Outlet,
  } from 'react-router-dom';

export  const MainNews = () => {
    return(
        <>  
            <Link to="/itemnews" className="mb-4 fs-1 text-danger text-decoration-none text-app"> Read news information </Link> {" "}
            <Outlet />
        </>
       
    )
}