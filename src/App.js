import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import {AddItem, List} from "./functions"



// First value of the Todo List
const initialList = [
  {
    id: "a",
    name: "wash the dishes",
  },
];

function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function enter_key(event) {
    if (event.key == 'Enter') {
      event.preventDefault();
      setName(event.target.value);
      handleAdd();
    }
    }

  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });

    setList(newList);

    setName("");
  }

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);
 
    setList(newList);
  }

      return (
        <div className="App">
          <h1 className="display-1 text-danger">Todos</h1>
          <div className="card ms-5 me-5">
            <div className="card-body ps-5 pe-5">
              <AddItem
                name={name}
                onChange={handleChange}
                onAdd={handleAdd}
                enter_func={enter_key}
              />
              <List list={list} onRemove={handleRemove} />
            </div>
          </div>
        </div>
      );

}

export default App;


