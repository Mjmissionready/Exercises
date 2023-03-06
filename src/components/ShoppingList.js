import { useState } from "react";
import "./ShoppingList.css"

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");

    // function handleChange(event) {
    //     setText(event.target.value);
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     if (!text) return;
    //     setItems([...items, text]);
    //     setText("");
    // }
    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text) return;
        setItems([...items, text]);
        setText("");
    }

    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* <ul>
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul> */}

            <form onSubmit={handleSubmit}>
                <label htmlFor="new-item">
                    Add new item:
                    <input
                        id="new-item"
                        type="text"
                        value={text}
                        onChange={handleChange}
                    />
                </label>
                <button>Add</button>
            </form>

        </div>
    );
}

export default ShoppingList;
