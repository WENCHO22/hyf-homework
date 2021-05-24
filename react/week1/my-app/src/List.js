import Header from "./Header.js"

function ListItems(props){
    const toDoList = props.list.map((item, index) => 
    <li key={index}>{item.description}, {item.dueDate.toDateString()}</li>
    );
    return (<ul>{toDoList}</ul>)
}

function ToDoList(){
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
    return(
      <>
      <Header title="To do list:" />
      <ListItems list={toDoArray} />
      </>
    )
  }

export default ToDoList;