import axios from 'axios';

const TODO_URL = "http://127.0.0.1:3001/api/todos";

export const getTodo = () => axios.get(TODO_URL)

export const postTodo = (body) => axios.post(TODO_URL, body); //sudah bisa(?) di postman kelihatannya udah masuk tapi ada error 'replace' di backend

export const deleteTodo = (id) => axios.delete(`${TODO_URL}/${id}`)

export const editTodo = (id, body) => axios.patch(`${TODO_URL}/${id}`, body);// sudah bisa(?)
