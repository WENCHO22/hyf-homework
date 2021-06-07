import { useState } from "react"
import Button from "./Buttons"
function AddTodo({ todos, setTodos }) {
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (!description) {
            alert("Please provide a description")
            return
        }
        if (!deadline) {
            alert("Please provide a deadline for your new todo")
            return
        }
        const newId = Math.max(...todos.map(item => item.id)) + 1
        const obj = {
            id: newId,
            description: description,
            deadline: deadline
        }
        setTodos([...todos, obj])
    }



    return (
        <form onSubmit={handleSubmit}>
            <label>Todo description:
            <input type="text" placeholder="Add new todo.." value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>Deadline: <input type="date" onChange={e => setDeadline(e.target.value)} /></label>
            <Button type="submit" name="Add todo" />
        </form>
    )
}

export default AddTodo