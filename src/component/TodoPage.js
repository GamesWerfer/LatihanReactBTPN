import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import {getTodo, postTodo, deleteTodo, editTodo} from '../services/TodoServices'

const TodoPages = () => {

    const [todos, setTodos] = useState([]); //arguments are used to initiliaze the values
    const [value, setValue] = useState('');
    const [editValue, setEditValue] = useState('');
    const [id, setId] = useState('');

    const [deleteId, setDeleteId] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }
    
    const handleSubmit = async () => {
        // todos.push(value);
        // setTodos([...todos]);
        // setValue('');
        const body = {
            title: value
        }
        console.log("Before: " + body)
        const newData = await postTodo(body);
        console.log(newData);
        setTodos([...todos, newData.data]);
        console.log("After: " + body)
        
    }

    const handleDelete = (id) => {
        // const newTodos = todos.filter((todo, index) => index  !== id);
        // setTodos([...newTodos]);

        deleteTodo(id);
        getData();
    }

    const handleEditIdOnChange = (e) => {
        setId(e.target.value);
    }
    
    const handleEditTitleOnChange = (e) => {
        setEditValue(e.target.value);
    }

    const handleEdit = (editId) => {
        
        const body = {
            title: editValue
        }
        editTodo(todos[editId]._id, body)
        getData();
        // console.log(editValue);
        // console.log(todos);
        // todos[editId].title = editValue;
        // const newTodos = todos;
        // setTodos([...newTodos]);
    }

    const getData = async () => {
        const {data: {data}} = await getTodo();
        console.log(data);
        setTodos([...data]);
    }
    
    useEffect(() => {
        getData();
    }, []);

    //getData(); //works, but keeps on getting called (maybe becuase of the render function being called constantly)

    return (
        <div>
            <label>Todo: </label>
            <input
                value = {value}
                onChange = {event => handleOnChange(event)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <TodoList todoList={todos} handleDelete= {handleDelete}></TodoList>

            <h3>Edit todo</h3>
            <label>Todo index: </label>
            <input
                value = {id}
                onChange = {event => handleEditIdOnChange(event)}
            />
            <label>new todo title: </label>
            <input
                value = {editValue}
                onChange = {event => handleEditTitleOnChange(event)}
            />
            <button onClick={() => handleEdit(id)}>Edit</button>

            

        </div>
        
    );
}

export default TodoPages;