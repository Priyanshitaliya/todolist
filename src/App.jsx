import React, { useState } from "react";
import Todolist from "./Todolist";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  //array ma add and delete kri devanu atle array ma aave ne niche list ma ave empty array use kre
  //add krvanu empty array ma
  //array one by one dekhadva map method

  const listOfItems = (event) => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id)=>{
    setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
            return index !== id;
        })
    })


}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
          />
          <Button onClick={listOfItems}> <AddIcon/> </Button>

          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval,index) => {
              return <Todolist key={index} 
              id={index}
              text={itemval}
              onSelect={deleteItems} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;


