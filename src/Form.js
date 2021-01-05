import React,{useState,useEffect} from "react";
import { InputGroup,FormControl,Button,Alert } from 'react-bootstrap';
import Todos from './List'

const Form = (props) => {
    useEffect(()=>{
        getLocalData()
        getLocalTodos()
    },[])
    const[bucketName,setBucketName]=useState([])
    const[inputBucketText,setInputBucketText]=useState("")
    const[selectedBucket,setSelectedBucket]=useState("")
    const[todoName,setTodoName]=useState([])
    const[filteredtodoName,setFilteredTodoName]=useState([])
    const[inputTodoText,setInputTodoText]=useState("")
    const inputBucketTextHandler=(e)=>{
        setInputBucketText(e.target.value)
    }
    const bucketTextHandler=(e)=>{
        setBucketName([...bucketName,{id:parseInt(Math.random()*1000) ,"name":inputBucketText}])
        if(bucketName.length < 1 ){
            setSelectedBucket(inputBucketText)
        }
        setInputBucketText("")
    }

    const selectedBucketChangeHandler=(e)=>{
        console.log("changed")
        setSelectedBucket(e.target.value)
    }

   useEffect(() => {
       console.log("bucketname:",typeof(bucketName))
        localStorage.setItem("buckets", JSON.stringify(bucketName))
      }, [bucketName]);
    
    useEffect(() => {
        console.log("called",selectedBucket)
        const filteredTodos = [...todoName].filter(todo => todo.bucket == selectedBucket);
        console.log("filtered todos",filteredTodos)
        setFilteredTodoName(filteredTodos);
      }, [selectedBucket]);

    const inputTodoTextHandler=(e)=>{
        setInputTodoText(e.target.value)
    }
    const todoTextHandler=(e)=>{
        setTodoName([...todoName,{id:parseInt(Math.random()*1000) ,"name":inputTodoText,"bucket":selectedBucket,"status":0}])
        setFilteredTodoName([...filteredtodoName,{id:parseInt(Math.random()*1000) ,"name":inputTodoText,"bucket":selectedBucket,"status":0}])
        setInputTodoText("")
    }

    useEffect(() => {
         localStorage.setItem("todos", JSON.stringify(todoName))
         console.log("todoname",todoName)
         const removedArr = [...todoName].filter(todo => todo.bucket == selectedBucket);
         setFilteredTodoName(removedArr);
       }, [todoName]);
  

    const getLocalData=(e)=>{
        if(localStorage.getItem("buckets")==null){
            console.log("null bucker")
            setBucketName([])
        }
        else{
            console.log("not null bucker",JSON.parse(localStorage.getItem("buckets"))[0].name)
            setBucketName(JSON.parse(localStorage.getItem("buckets")))
            setSelectedBucket(JSON.parse(localStorage.getItem("buckets"))[0].name)
        }
    }

    const getLocalTodos=(e)=>{
        if(localStorage.getItem("todos")==null){
            setTodoName([])
        }
        else{
            setTodoName(JSON.parse(localStorage.getItem("todos")))
        }
    }

    
    

  

  return (
    <div className="col-md-12">
        <div style={{width:"50%",margin:"2%"}}>
        <InputGroup size="sm" className="mb-2">
            <FormControl value={inputBucketText} onChange={inputBucketTextHandler}  style={{marginLeft:"2%"}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            <Button variant="warning" onClick={bucketTextHandler} style={{marginLeft:"2%"}}>Add Bucket</Button>
        </InputGroup>
        
        </div>
      <div style={{width:"50%",margin:"2%"}}>
          
        <InputGroup size="sm" className="mb-2">
        <FormControl as="select" onChange={selectedBucketChangeHandler} custom>
            <option disabled >---Select Bucket---</option>
            {bucketName.map((bucket)=>(<option key={bucket.id} id={bucket.id}>{bucket.name}</option>))}
        </FormControl>
            <FormControl value={inputTodoText} onChange={inputTodoTextHandler} style={{marginLeft:"2%"}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            <Button variant="warning" onClick={todoTextHandler} style={{marginLeft:"2%"}}>Add To Do</Button>
        </InputGroup>
        
        </div>

        <Todos filteredtodoName={filteredtodoName} setFilteredTodoName={setFilteredTodoName} todoName={todoName} setTodoName={setTodoName}/>
    </div>
  );
};

export default Form;