import React, {useState} from "react"
import Button from "./Buttons"

function Item({item, remove, todos, setTodos}) {
    const [isChecked, setIsChecked] = useState(false)    
    const [description, setDescription] = useState(item.description)
    const [edit, setEdit] = useState(false)
  
    function check() {
     setIsChecked(!isChecked)
    }   


    return (
      <li key={item.id} style={{ "textDecoration": isChecked ? "line-through" : "none" }}>
        <span className="item-container">
        <span className="text-items">
        {edit 
        ? <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)}></input>
        :<>{description} | {item.deadline}</> }
        <input type="checkbox" className="checkbox" onClick={check}></input>
        </span>
        <span className="buttons">
        <Button name="Remove" onClick={()=> remove(item.id)} />
        <Button name={edit ? "Update" : "Edit"} onClick={() => {setEdit(!edit)}} />
        </span>
        </span>
      </li>
    )}

export default Item