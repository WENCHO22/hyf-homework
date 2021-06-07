import Item from "./Items"

function List({todos, setTodos}) {

  function remove(id) {
    setTodos(todos.filter(item => item.id !== id))
  }
    return (
      <>
      {todos.length === 0 && <p>No items</p> }
      <ul>
        
        {todos.map(item => <Item key={item.id} item={item} remove={remove} todos={todos} setTodos={setTodos} />)}
      </ul>
      </>
    )
  }

export default List