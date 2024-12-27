import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import DOMAIN from "../services/endpoint";

export default function HomePage() {

    const [notification, setNotification] = useState("")
    const [todos, setTodos] = useState([])

    async function handleCreate(e) {
        e.preventDefault()
        const content = e.target.content.value
        const res = await axios.post(`${DOMAIN}/api/todos`, { content: content })
        if (res.data.success) {
            setNotification("successfully created to do")
            const res2 = await axios.get(`${DOMAIN}/api/todos`)
            const newTodos = [...res2.data]
            setTodos(newTodos)
        }
        else (
            setNotification("creation failed")
        )
    }

    async function handleDelete(e) {
        e.preventDefault()
        const todo_id = e.target.todoid.value
        const res = await axios.delete(`${DOMAIN}/api/todos/${todo_id}`)
        if (res.data.success) {
            setNotification("successfully deleted to do")
            const res2 = await axios.get(`${DOMAIN}/api/todos`)
            const newTodos = [...res2.data]
            setTodos(newTodos)
        }
        else (
            setNotification("deletion failed")
        )
    }

    useEffect(() => {
        async function getToDos() {
            const res = await axios.get(`${DOMAIN}/api/todos`)
            const newTodos = [...res.data]
            setTodos(newTodos)

        }
        getToDos()
    }, [])

    return (
        <div className="flex-1">
            <main>
                <div className="text-8xl text-blue-500 text-center">To do app</div>
                <form className="border flex flex-col w-[400px] mx-auto" onSubmit={(handleCreate)}>
                    <input className="border" type="text" name="content" id="content" />
                    <button className="border">Create</button>
                </form>
                <div className="text-center">{notification}</div>
                {todos.map((todo) => <div key={todo.todo_id} className="w-[400px] mx-auto flex my-2">
                    <div className="px-2">{todo.todo_id}</div>
                    <div className="px-2">{todo.content}</div>
                    <button className="px-2 mx-2 rounded-lg bg-gray-800 text-white">Edit</button>
                    <form onSubmit={handleDelete}>
                        <input type="text" value={todo.todo_id} name="todoid" id="todoid" className="hidden" />
                        <button className="px-2 mx-2 rounded-lg bg-red-800 text-white">Delete</button>
                    </form>
                </div>)}
            </main>
        </div>
    )
}