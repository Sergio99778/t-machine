import './TodoSearch.css'

export function TodoSearch(props: { searchValue: string, setSearchValue: (value: string) => void }) {
  return <input className="TodoSearch" type="text" placeholder="Todo search" onChange={(e) => props.setSearchValue(e.target.value)} value={props.searchValue}/>
}
