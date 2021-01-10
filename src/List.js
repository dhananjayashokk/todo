import React from "react";
import { InputGroup,FormControl,Button,Alert } from 'react-bootstrap';
import { update_todos,delete_todos } from "./actions/todo";
import { useDispatch } from "react-redux";

const List = ({todoName,selectedBucket}) => {
  const dispatch = useDispatch();
  
  const completeTodo = (e) => {
    dispatch(update_todos( e.target.id,selectedBucket))
    };
    
  const removeTodo = (e) => {
    dispatch(delete_todos( e.target.id,selectedBucket))

  };

  return (
    <div style={{marginTop:"3%"}}>
      {todoName.map((bucket)=>(<div key={bucket.id}  style={{display:"flex",marginTop:"1%"}}>
        <Alert key={"1"}  style={{minWidth:"40%"}} variant={bucket.status==1?"success":"danger"}>
            {bucket.name}
        </Alert>
        <Button size="sm" className="mb-2" id={bucket.id} variant={bucket.status==1?"danger":"success"} onClick={completeTodo} style={{marginLeft:"2%"}}>{bucket.status==1?"Incomplete":"Complete"}
        </Button>
        <Button size="sm" className="mb-2" variant="danger" id={bucket.id}  onClick={removeTodo} style={{marginLeft:"2%"}}>
            Delete
        </Button>
    </div>))} 
  </div>
  );
};

export default List;