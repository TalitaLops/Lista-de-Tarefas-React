import React, { useState } from "react";

import Add from "../images/icons8-add-64.png";

function Form (props) {
  const [tarefa, setTarefa] = useState("");

  

  function handleAddTarefa(event) {
    event.preventDefault();

    if (tarefa) {
      props.handleAddTarefa(tarefa);
    }
    setTarefa("");
  }

  return (
    <div class="novo_item" id="novoItem">
      <button type="submit" onClick={handleAddTarefa}>
        <img src={Add} />
      </button>

      <input
        type="text"
        placeholder="Create New Item"
      />
    </div>
  );
}
export default Form;
