import axios from "axios";

import {config} from '../config';


const create_bucket = (bucket_name) => {
  return axios.post(config.API_URL + "create_bucket", {
    
    buckets:bucket_name
  });
};

const add_todos = (todo_data) => {
  return axios.post(config.API_URL + "add_todos", {
    
    todo_data
  });
};

const get_buckets = () => {
  console.log("reached service ")
  return axios({
    method: 'get',
    url: config.API_URL + "get_buckets"
    })
    .then((response) => {

      return response.data;
    })
    .catch((error) => {
      console.log("bucket error",error)

      return error;
    });
};

const get_todos = (selected_bucket) => {
  console.log("reached get todo service ",selected_bucket)
  return axios({
    method: 'get',
    url: config.API_URL + "get_todos",
    params:{bucket_name:selected_bucket}
    })
    .then((response) => {

      return response.data;
    })
    .catch((error) => {
      console.log("bucket error",error)

      return error;
    });
};

const update_todos = (todo_id) => {
  return axios({
    method: 'put',
    url: config.API_URL + "update_todos",
    params:{todo_id:todo_id}
    })
    .then((response) => {

      return response.data;
    })
    .catch((error) => {
      console.log("bucket error",error)

      return error;
    });
};

const delete_todos = (todo_id) => {
  return axios({
    method: 'put',
    url: config.API_URL + "delete_todos",
    params:{todo_id:todo_id}
    })
    .then((response) => {

      return response.data;
    })
    .catch((error) => {
      console.log("bucket error",error)

      return error;
    });
};


export default  {
  create_bucket,
  get_buckets,
  add_todos,
  get_todos,
  update_todos,
  delete_todos
};