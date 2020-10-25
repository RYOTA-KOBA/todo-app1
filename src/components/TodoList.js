import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import CitieList from './Todo'


// firebase.firestore().collection("prefectures").add({
//   name: "Ibaraki",
//   country: "Japan"
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        };

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>今日のタスク<span>✍️</span></h1>
            <TodoForm onSubmit={addTodo} />
            {/* <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            /> */}
            <CitieList 
                
            />
            {/* {cities.map((city) => 
            <li key={city.id}>
                <h2>{city.name}</h2>
                <h2>{city.country}</h2>
            </li>
            )} */}
        </div>
    )
}

export default TodoList