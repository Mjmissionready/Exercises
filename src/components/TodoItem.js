import remove from "./bin.png";

function TodoItem({ todo, onRemove }) {
    return (
        <div style={{
            color: "darkslategrey",
            marginTop: "20px",
        }}>
            <li>{todo}
                <button style={{
                    backgroundColor: "transparent",
                    border: "none",
                }}
                    onClick={onRemove}>
                    <img style={{ width: "30px" }} src={remove} alt="remove-icon" /></button>
            </li>
        </div>
    );
}

export default TodoItem;
