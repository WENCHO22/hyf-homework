import { useContext } from "react"
import { UsersContext } from "./App"

export default function Search() {
    const {query, setQuery} = useContext(UsersContext)
    return (
          <input type="search" value={query} onChange={e => setQuery(e.target.value)} />
    )
}
