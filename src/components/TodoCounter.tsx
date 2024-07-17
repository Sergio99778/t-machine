export function TodoCounter(props: { total: number; completed: number }) {
  return (
    <h2>
      Has completado {props.completed} de {props.total} TODOs
    </h2>
  );
}
