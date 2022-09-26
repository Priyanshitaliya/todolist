import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
const Todolist = (props) => {

    const [line,setLine] = useState(false);

    const cutIt = ()=>{
        setLine(true);
    }

  
    return (
        <>
            <div className="todo_style">
            {/* <i className="fa-solid fa-circle-xmark" aria-hidden="true" onClick={()=>{
                props.onSelect(props.id);
            }}></i> */}

            <span onClick={cutIt}>
                {" "}
                <DeleteIcon/>{" "}
            </span>
                <li style={{ textDecoration: line ? 'line-through' : 'none'}}>{props.text}</li>
            </div>
        </>
    );

}
export default Todolist;