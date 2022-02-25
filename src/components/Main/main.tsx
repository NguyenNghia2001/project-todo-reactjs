import React from "react";

// import các component cho main
import {Jumbotron} from '../Header/jumbotron';
import { MainNews } from "../News/mainNews";
import {WorkList} from '../TodoList/worklist';

export const Main = () => {
    return (
        <main role="main">
        <Jumbotron />
        <div className="album py-5 bg-light">
         <div id="container">
              {/* gọi đến component */}
            <div className="innerContainer Todo">
              <WorkList />
            </div>
            <div className="innerContainer news">
              <MainNews />
            </div>
            <div className="innerContainer users">
              {/* <WorkList /> */}

            </div>
            


          </div>
         </div>
       </main>
    )
}