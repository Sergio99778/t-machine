export function TodoList(props: { children: React.ReactNode }) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}