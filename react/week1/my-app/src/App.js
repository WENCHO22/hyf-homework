//import logo from './logo.svg';
import './App.css';
import Header from "./Header.js";
import ListItems from "./List.js";

const toDoArray =[
  {
  description : "Clean the house",
  dueDate: new Date(2020, 12, 25)
},
{
  description : "Buy a new shirt",
  dueDate: new Date(2021, 10, 20)
},
{description : "Finish my homework",
  dueDate: new Date(2021, 5, 10)
}
]


function HeaderWithList(){
  return(
    <div>
    <Header title="To do list:" />
    <ListItems list={toDoArray} />
    </div>
  )
}


function App() {
  return (
    <HeaderWithList />
  )
}

export default App