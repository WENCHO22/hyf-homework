//import logo from './logo.svg';
import './App.css';
import ListItems, { todos} from "./List.js";
import Timer from "./Timer.js"

function Header(props) {
  return (
    <h1>{props.title}</h1>
  )
}

function App() {

  return (
    <>
      <Header title="To do list:" />
      <ListItems list={todos} />
      <Timer />
    </>
  )
}

export default App