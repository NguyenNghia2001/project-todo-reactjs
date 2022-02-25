import React, { useEffect, useState } from "react";
import { IUser } from "../../pages/NewsApp";

type Props = {
  data?:IUser
  setData:(data:IUser| null)=>void;
}
export function PostRequestHooks(props:Props) {
    const [email , setEmail] = useState("");
    const [name , setName] = useState ("");
    const [body , setBody] = useState("");
    const [message , setMessage] = useState("");
    

    React.useEffect(()=>{      
      if(!props.data) return;
      const {body,email,id,name} = props.data;
      setEmail(email);
    },[props.data]);

    if(!props.data) return null;
      // logic handleSubmit 
  const handleSubmit =async (event:any) => {
    event.preventDefault();
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email : email,
                name : name,
                body : body, })
        };
        fetch('https://jsonplaceholder.typicode.com/comments', requestOptions)
        .then(response => response.json())
        .then(data => (
            setEmail(data.email),
            setName(data.name),
            setBody(data.body),
            setMessage('Add new item successful')
        ));
    } catch (error) {
      console.log(error);
    }
  }


    return (
      // TODO : UI , Render UI
      <div style={{background:'red',position:'fixed',top:0,left:0,right:0,padding:'20%',zIndex:999}}>
         <div style={{background:'white',height:'100%',width:'100%'}}>
         Modal Here {props.data.email}
         <button onClick={()=>props.setData(null)}>Close modal</button>
         </div>
      </div>
    );
}