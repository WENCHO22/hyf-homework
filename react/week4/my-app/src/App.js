import './App.css';
import Header from "./Header"
import SearchInput from "./SearchInput"
import SearchResults from "./Results"
import { useState, useEffect, createContext } from "react"

export const UsersContext = createContext();

function App() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [queryResult, setQueryResult] = useState([])

  async function fetchData() {
    try {
      setLoading(true)
      const response = await fetch(`https://api.github.com/search/users?q=${query}`)
      const data = await response.json()
      const users = data.items
      setQueryResult(users)
      setLoading(false)
    } catch (error) {
      throw Error("could not fetch the data")
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [query])

  return (
    <>
      <Header title="GitHub User Searcher" />
      <UsersContext.Provider value={{query, setQuery, loading, queryResult}}>
        <SearchInput query={query} setQuery={setQuery} />      
        <SearchResults loading={loading} queryResult={queryResult} query={query} />
      </UsersContext.Provider>
    </>

  );
}

export default App;