import { useCallback, useEffect, useState } from "react";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
]


function ListItems(props) {
  const [list, setList] = useState(props.list)
  console.log(list)
  function Remove(id) {
    setList(list => list.filter(item => item.id !== id))
  }
  function newTask() {
    setList(list => add(list))
  }

  return (
    <>
      <AddTodo onClick={newTask} />
      <List list={list} remove={Remove} />
    </>
  )
}

function List(props) {
  console.log(props)
  if (props.list.length === 0) {
    return <p>No items</p>
  } else {
    return (
      <ul>
        {props.list.map(item => <Item key={item.id} item={item} remove={props.remove} />)}
      </ul>
    )
  }
}

function Item(props) {
  const [isChecked, setChecked] = useState(false)
  function check() {
    setChecked(!isChecked)
  }
  return (
    <li key={props.item.id} style={{ "text-decoration": isChecked ? "line-through" : "none" }}>{props.item.description}
      <input type="checkbox" className="checkbox" onClick={check}></input>
      <button className="remove-btn" onClick={() => { props.remove(props.item.id) }}>Remove</button>
    </li>
  )
}

function AddTodo(props) {
  return <button onClick={props.onClick}>Add todo</button>
}


function add(array) {
  const ids = array.map(item => item.id)
  const tasks = ["Repair tv", "Sleep", "Go on vacation", "Buy socks", "Find my wallet", "Return books", "Clean the house", "Finish homework"]
  const randomIndex = Math.floor(Math.random() * tasks.length)
  const id = Math.max(...ids) + 1
  const obj = {
    description: tasks[randomIndex],
    id: id
  }

  return [...array, obj]
}

export default ListItems
export { todos }