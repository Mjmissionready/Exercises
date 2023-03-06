import TodoItem from "./TodoItem";

function TodoList({ todos, onRemoveTodo }) {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onRemove={() => onRemoveTodo(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
