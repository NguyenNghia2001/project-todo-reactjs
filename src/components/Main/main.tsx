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
            <div className="innerContainer ">
              <WorkList />
            </div>
            <div className="innerContainer ">
              <MainNews />
            </div>
            <div className="innerContainer ">
              <WorkList />

            </div>
            


          </div>
         </div>
       </main>
    )
}