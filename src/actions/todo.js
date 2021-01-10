import {
  GET_BUCKETS,
  GET_TODOS
} from "./types";

import TodoService from "../services/todo.service";

export const create_bucket = (bucket_name) => (dispatch) => {
  return TodoService.create_bucket(bucket_name).then(
    (response) => {
      dispatch({
        type: GET_BUCKETS,
        payload:[response.data]
      });

      return Promise.resolve();
    },
    (error) => {
      return Promise.reject();
    }
  );
};

export const get_buckets = () => (dispatch) => {
  return TodoService.get_buckets().then(
    (response) => {
      console.log("response",response)
      dispatch({
        type: GET_BUCKETS,
        payload:response
      });

      return Promise.resolve();
    },
    (error) => {
      return Promise.reject();
    }
  );
};

export const get_todos = (selected_bucket) => (dispatch) => {
  console.log("get_do action",selected_bucket)
  return TodoService.get_todos(selected_bucket).then(
    (response) => {
      console.log("response",response)
      dispatch({
        type: GET_TODOS,
        payload:response
      });

      return Promise.resolve();
    },
    (error) => {
      return Promise.reject();
    }
  );
};

export const update_todos = (todo_id,selected_bucket) => (dispatch) => {
  return TodoService.update_todos(todo_id).then(
    (response) => {
      console.log("response",response)
      
      dispatch(get_todos(selected_bucket))

      return Promise.resolve();
    },
    (error) => {
      return Promise.reject();
    }
  );
};

export const delete_todos = (todo_id,selected_bucket) => (dispatch) => {
  return TodoService.delete_todos(todo_id).then(
    (response) => {
      console.log("response",response)
      dispatch(get_todos(selected_bucket))

      return Promise.resolve();
    },
    (error) => {
      return Promise.reject();
    }
  );
};

export const add_todos = (todo_data) => (dispatch) => {
  return TodoService.add_todos(todo_data).then(
    (response) => {
      dispatch(get_todos(todo_data.bucket_name))
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject();
    }
  );
};
