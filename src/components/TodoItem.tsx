export function TodoItem(props: { text: string; completed: boolean }) {
  return (
    <li>
      <span>{props.completed ? "✔" : "❌"}</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}
