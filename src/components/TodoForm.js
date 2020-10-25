import React, {useState, useEffect, useRef} from 'react'

import firebase from '../firebase/firebase'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const [todo, setTodo] = useState('')

    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus()
    // })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random()*10000), 
        //     text: input
        // });
        // setInput('')

        firebase
            .firestore()
            .collection('todos')
            .add({
                todo,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                setTodo('')
            })
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input 
                    type="text" 
                    placeholder="タスクの編集" 
                    value={todo} 
                    name="text" 
                    className="todo-input edit"
                    onChange={e => setTodo(e.currentTarget.value)}
                    // ref={inputRef}
                />
                <button className="todo-button edit">更新する</button>
                </>
                ) : (
                <>
                    <input 
                    type="text" 
                    placeholder="新規タスクを追加する" 
                    value={todo} 
                    name="text" 
                    className="todo-input"
                    onChange={e => setTodo(e.currentTarget.value)}
                    // ref={inputRef}
                />
                <button className="todo-button">タスクを追加</button>
                </>
                )
                }
                {/* <>
                <input 
                    type="text" 
                    value={name} 
                    placeholder="City"
                    // name="text" 
                    className="todo-input"
                    onChange={e => setName(e.currentTarget.value)}
                    // ref={inputRef}
                />

                <input 
                    type="text" 
                    value={country} 
                    placeholder="Country"
                    // name="text" 
                    className="todo-input"
                    onChange={e => setCountry(e.currentTarget.value)}
                    // ref={inputRef}
                />
                <button className="todo-button">投稿</button>
                </> */}
        </form>
    )
}

export default TodoForm
