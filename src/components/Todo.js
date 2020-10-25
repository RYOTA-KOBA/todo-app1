import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import firebase from '../firebase/firebase'

const useTodos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('todos')
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                const newTodos =  snapshot.docs.map((doc) => ({
                    id: doc.id,
                    todo: doc.data().todo,
                    // name: doc.data().name,
                    // country: doc.data().country,
                    // ...doc.data()
                }))

                setTodos(newTodos)
                // debugger
            })
    }, [])
    return todos;
}

const TodosList = () => {
    const todos = useTodos()

    return (
        <>
        {todos.map((todo) => 
        <li className="todo-row" key={todo.id}>
            <div>{todo.todo}</div>
        </li>
        )}            
        </>
    )
}

// function Todo({todos, completeTodo, removeTodo, updateTodo}) {
//     const [edit, setEdit] = useState({
//         id: null,
//         value: '',
//     });

//     const cities = useCities()

//     const submitUpdate = value => {
//         updateTodo(edit.id, value);
//         setEdit({
//             id: null,
//             value: '',
//         })
//     }

//     if(edit.id) {
//         return <TodoForm edit={edit} onSubmit={submitUpdate} />;
//     }

//     return todos.map((todo, index) => (
//         <div 
//             className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
//             key={index}
//         >
//             <div key={todo.id} onClick={() => completeTodo(todo.id)}>
//                 {todo.text}
//             </div>
//             <div className="icons">
//                 <RiCloseCircleLine 
//                  onClick={() => removeTodo(todo.id)}
//                  className="delete-icon"
//                 />
//                 <TiEdit 
//                     onClick={() => setEdit({ id: todo.id, value: todo.text})}
//                     className="edit-icon"
//                 />
//             </div>
//             {cities.map((city) => 
//             <li className="todo-row" key={city.id}>
//                 <div>{city.name}</div>
//                 <div>{city.country}</div>
//             </li>
//             )}
//     </div>
//     ))
// }

export default TodosList
