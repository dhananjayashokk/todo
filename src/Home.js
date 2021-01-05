import React,{useState,useEffect} from "react";
import { InputGroup,FormControl,Button,Alert } from 'react-bootstrap';
import Todos from './List'
import Form from './Form'

const Index = (props) => {
return (
    <div className="col-md-12">
        <h1>To-Do List</h1>
        
        <Form/>

    </div>
  );
};

export default Index;