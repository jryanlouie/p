import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import DOMAIN from "../services/endpoint";

export default function HomePage() {

    const [notification, setNotification] = useState("")
    async function handleCreate(e) {
        e.preventDefault()
        const content = e.target.content.value
        const res = await axios.post(`${DOMAIN}/api/todos`, { content: content })
        if (res.data.success) (
            setNotification("successfully created to do")
        )
        else (
            setNotification("creation failed")
        )
    }

    return (
        <div className="flex-1">
            <main>
                <div className="text-8xl text-blue-500 text-center">To do app</div>
                <form className="border flex flex-col w-[400px] mx-auto" onSubmit={(handleCreate)}>
                    <input className="border" type="text" name="content" id="content" />
                    <button className="border">Create</button>
                </form>
                <div className="text-center">{notification}</div>
            </main>
        </div>
    )
}