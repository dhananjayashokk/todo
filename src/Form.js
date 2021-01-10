import React,{useState,useEffect} from "react";
import { InputGroup,FormControl,Button,Alert } from 'react-bootstrap';
import Todos from './List'
import { useDispatch, useSelector } from "react-redux";
import { create_bucket,get_buckets,get_todos,add_todos } from "./actions/todo";

const Form = (props) => {
    let bucketnames   = useSelector(state => state.todo.buckets);
    const[bucketName,setBucketName]=useState(bucketnames.length!=0 ?  JSON.parse(bucketnames[0].name) : [])
    useEffect(() => {
        setBucketName(bucketnames.length!=0 ?  JSON.parse(bucketnames[0].name) : [])
        setSelectedBucket(bucketnames.length!=0 ?  JSON.parse(bucketnames[0].name)[0].name : "")
        
      }, [bucketnames]);
    
    let todos   = useSelector(state => state.todo.todos);
    const[todoName,setTodoName]=useState(todos.length!=0 ?  todos[0].name: [])
    useEffect(() => {
        setTodoName(todos.length!=0 ?  todos : [])
    }, [todos]);

    useEffect(()=>{
        getLocalData()
    },[])
    const dispatch = useDispatch();
    const[appendedBucket,setAppendedBucket]=useState([])
    useEffect(()=>{
        if(appendedBucket.length!=0){
        dispatch(create_bucket( JSON.stringify(appendedBucket)))
        
        }
    },[appendedBucket])
    
    const[inputBucketText,setInputBucketText]=useState("")
    const[selectedBucket,setSelectedBucket]=useState("")
    
    const[inputTodoText,setInputTodoText]=useState("")
    const inputBucketTextHandler=(e)=>{
        setInputBucketText(e.target.value)
    }
    const bucketTextHandler=(e)=>{
       setAppendedBucket([...bucketName,{id:parseInt(Math.random()*1000) ,"name":inputBucketText}])
       setInputBucketText("") 
    }

    const selectedBucketChangeHandler=(e)=>{
        setSelectedBucket(e.target.value)
    }

   
    
    useEffect(() => {
        getLocalTodos()
      }, [selectedBucket]);

    const inputTodoTextHandler=(e)=>{
        setInputTodoText(e.target.value)
        
    }
    const todoTextHandler=(e)=>{
        dispatch(add_todos( {"id":parseInt(Math.random()*1000),"bucket_name":selectedBucket,"todo_name":inputTodoText}))
        setInputTodoText("")
    }

    useEffect(() => {
       }, [todoName]);
  

    const  getLocalData=()=>{
        dispatch(get_buckets())
    }

    const  getLocalTodos=()=>{
        dispatch(get_todos(selectedBucket))
    }

        

    
    

  

  return (
    <>
        <div style={{width:"50%",marginTop:"2%"}}>
        <InputGroup size="sm" className="mb-2">
            <FormControl value={inputBucketText} onChange={inputBucketTextHandler}   aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            <Button size="sm" className="mb-2" variant="warning" onClick={bucketTextHandler} style={{marginLeft:"2%"}}>Create Bucket</Button>
        </InputGroup>
        
        </div>
      <div style={{width:"50%",marginTop:"2%"}}>
          
        <InputGroup size="sm" className="mb-2">
        <FormControl as="select" onChange={selectedBucketChangeHandler} custom>
            <option disabled >---Select Bucket---</option>
            {bucketName.map((bucket)=>(<option key={bucket.id} id={bucket.id}>{bucket.name}</option>))}
        </FormControl>
            <FormControl value={inputTodoText} onChange={inputTodoTextHandler} style={{marginLeft:"2%"}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            <Button size="sm" className="mb-2" variant="warning" onClick={todoTextHandler} style={{marginLeft:"2%"}}>Add To Do</Button>
        </InputGroup>
        
        </div>
        {todoName.length==0?"":(<Todos todoName={todoName} selectedBucket={selectedBucket} />)}
        
    </>
  );
};

export default Form;