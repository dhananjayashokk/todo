import React from "react";
import { InputGroup,FormControl,Button,Alert } from 'react-bootstrap';


const List = ({filteredtodoName,setFilteredTodoName,todoName,setTodoName}) => {
  
  const completeTodo = (e) => {
        let updatedTodos = filteredtodoName.map(todo => {
          if (todo.id == e.target.id) {
            todo.status = !todo.status;
          }
          return todo;
        });
        setFilteredTodoName(updatedTodos);
      };
    
    const removeTodo = (e) => {
    const removedArr = [...todoName].filter(todo => todo.id != e.target.id );
    setTodoName(removedArr);
    
  };

  return (
    <div style={{marginTop:"6%"}}>
      {filteredtodoName.map((bucket)=>(<div style={{display:"flex",marginTop:"2%"}}>
        <Alert key={"1"} style={{width:"50%"}} variant={bucket.status==1?"success":"danger"}>
            {bucket.name}
        </Alert>
        <Button id={bucket.id} variant={bucket.status==1?"danger":"success"} onClick={completeTodo} style={{marginLeft:"2%"}}>{bucket.status==1?"Incomplete":"Complete"}
        </Button>
        <Button variant="danger" id={bucket.id}  onClick={removeTodo} style={{marginLeft:"2%"}}>
            Delete
        </Button>
    </div>))} 
  </div>
  );
};

export default List;