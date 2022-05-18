import React, { useState } from "react";
import Note from "./Note";
function Create(props) {
    const[n,old]=useState({
        title:"",
        content:"",
    });
    
   const InputEvent=(event)=>{
    event.preventDefault();
    const {name,value}=event.target;
    old((prev)=>
    {
        return {
          ...prev,
          [name] : value,
        };
    });
   };
   const addEvent=(event)=>{
       event.preventDefault();
   props.passnote(n);
   
   };
return (
    
<div>
    <form>
        <input type="text"  value={n.title} name="title" onChange={InputEvent}  autoComplete="off" placeholder="Title"/>
        <p>
        <textarea name="content"  value={n.content}  onChange={InputEvent} placeholder="Take a note.."/> 
        </p>
        <button className="plus" onClick={addEvent} >
            +
        </button>
    </form>
</div>
);
}
export default Create;