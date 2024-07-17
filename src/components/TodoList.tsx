import './TodoList.css'

export function TodoList(props: { children: React.ReactNode }) {
    return (
        <ul className="TodoList">
            {props.children}
        </ul>
    )
}