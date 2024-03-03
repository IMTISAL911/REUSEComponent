import React from "react";

function User(props){
return(
    <div>

   <button onClick={()=>{alert("IMTISAL")}}> <span> {props.data.name}</span></button>
    <span> {props.data.email}</span>
    <span> {props.data.contact}</span>
    
    </ div>
)
}
export default User