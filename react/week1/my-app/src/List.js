function ListItems(props){
    const toDoList = props.list.map((item, index) => 
    <li key={index}>{item.description}, {item.dueDate.toDateString()}</li>
    );
    return (<ul>{toDoList}</ul>)
}

export default ListItems;