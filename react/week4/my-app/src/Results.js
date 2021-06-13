import { useContext } from "react"
import { UsersContext } from "./App"

export default function Results() {
    const {loading, queryResult} = useContext(UsersContext)
    return (
        <>
            {loading === true && <p>Loading...</p>}
            <ul className="result-container">
                {queryResult 
                ? queryResult.map(item => <li key={item.id}>{item.login}</li>)
                : <p>No items</p>
            }
            </ul>
        </>

    )
}