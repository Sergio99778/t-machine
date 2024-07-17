import './TodoItem.css';

export function TodoItem(props: { text: string; completed: boolean }) {
  return (
    <li className="TodoItem">
      <span
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >{props.completed ? "✔" : "❌"}</span>
      <p
      className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >{props.text}</p>
      <span
        className="Icon Icon-delete"
      >X</span>
    </li>
  );
}
