import React, { useState } from "react";

// import các component cho main
import {Jumbotron} from '../Header/jumbotron';
import { MainNews } from "../News/mainNews";
import {WorkList} from '../TodoList/worklist';
import { FormDataUsers , UserData} from "../User/formDataUser";
import RenderDataUserTable from "../User/renderDataUser";

export const Main = () => {

  const [data , setData] = useState([])
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
          </div>
          <div className="container-03 m-5">
              <div className="containerForm">
                <div className="formData m-4">
                  <FormDataUsers data  />
                </div>
              </div>
              <div className="containerUsers">
                <div className="tableUsers">
                    <RenderDataUserTable dataUsers = 'nuhuadasd' />
                </div>
              </div>
          </div>
         </div>
       </main>
    )
}