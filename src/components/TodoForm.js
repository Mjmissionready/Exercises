import { useState } from "react";

function TodoForm({ onAddTodo }) {
    const [newTodo, setNewTodo] = useState("");

    const handleNewTodoChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTodo(newTodo);
        setNewTodo("");
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    style={{
                        border: "1px",
                        width: "500px",
                        height: "50px",
                        paddingLeft: "20px",
                        fontSize: "20px"
                    }}
                    type="text"
                    value={newTodo}
                    onChange={handleNewTodoChange}
                    placeholder="What do you have to do today?"
                />
                
                <button
                    style={{
                        border: "1px",
                        height: "50px",
                        padding: "8px 20px",
                        fontSize: "20px",
                        fontWeight: "bolder",
                        backgroundColor: "black",
                        color: "white"
                    }}
                    type="submit">Add</button>
            </form>
        </div>
    );
}

export default TodoForm;
