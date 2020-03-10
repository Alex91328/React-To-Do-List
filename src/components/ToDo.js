import React, { useState } from 'react';
import Item from './Item';
import TodoForm from './TodoForm';

const ToDo = () => {
    const initialState = [
        {
            text: 'Learn Hooks',
            isCompleted: false,
        },
        {
            text: 'Doesnt Matter',
            isCompleted: false,
        },
        {
            text: 'What these are called',
            isCompleted: false,
        },
    ];

    const [todos, setToDo] = useState(initialState);
    console.log(todos);

    const addToDo = (text) => {
        const newToDos = [...todos, { text, isCompleted: false }];
        setToDo(newToDos);
    }

    const handleItemClick = (index) => {
        // Get all todos array from state ( todos )
        const newToDos = [...todos];

        //Set isCompleted property to reverse of what its current value is
        newToDos[index].isCompleted = !newToDos[index].isCompleted;
        setToDo(newToDos);
    }

    const handleRemoveClick = (index) => {
        // Get all todos array from the state ( todos )
        const newToDos = [...todos];

        // Remove the click item from the todos array
        newToDos.splice(index, 1);

        // Set state with the new array of todos with the updated value
        setToDo(newToDos);
    };

    console.log(todos)

    return (
        <div className="todo-container">
            <h2 className="main-heading">Todo App</h2>
            <TodoForm addToDo={addToDo} />
            <div>
                {todos.length ? (
                    todos.map((item, index) => (
                        <Item
                            key={`${item.text}-${index}`}
                            todo={item}
                            index={index}
                            handleRemoveClick={handleRemoveClick}
                            handleItemClick={handleItemClick}
                        />
                    ))
                ) : ''}
            </div>
        </div >
    );
};

export default ToDo;