import React, { useState } from "react";
import "./App.css";

import Calendario from "./components/images/icons8-calendar-64.png";
import More from "./components/images/icons8-mais-30.png";
import Close from "./components/images/icons8-excluir-30.png";
import Add from "./components/images/icons8-add-64.png";


function App() {

  return (
    <section>
      <header class="menu">
        <div class="header">
          <img src={Calendario} />
          <h1 id="title">Today</h1>
        </div>
      </header>
      <div class="elipsis">
        
        <button id="more">
          <img src={More} />
        </button>

         <div class="opcoes" >
          <button>Completed</button>
          <button>In progress</button>
          <button>Removed</button>
        </div> 

      </div>

      <main>
        <div class="lista_itens" >
          <label class="tarefas">
              <input type="checkbox" name="item"/>
              <p>Build a modern To do App</p>
              <button id="botaoExcluir"><img src={Close}/></button>
          </label>
          <label class="tarefas">
              <input type="checkbox" name="item"/>
              <p>Workout for 30 minutes at the gym</p>
              <button id="botaoExcluir"><img src={Close}/></button>
          </label>
          <label class="tarefas">
              <input type="checkbox" name="item"/>
              <p>Buy groceries (milk, vegetables, fruits, fish)</p>
              <button id="botaoExcluir"><img src={Close}/></button>
          </label>
          <label class="tarefas">
              <input type="checkbox" name="item"/>
              <p>Clean the house and backyard</p>
              <button id="botaoExcluir"><img src={Close}/></button>
          </label>
          <label class="tarefas">
              <input type="checkbox" name="item"/>
              <p>Take the car to the autoshop for an oil change</p>
              <button id="botaoExcluir"><img src={Close}/></button>
          </label>
        </div>
      </main>



      <div class="novo_item" id="novoItem">
        <button type="submit" >
          <img src={Add} />
        </button>

        <input
          type="text"
          onChange={(event) => console.log(event.target.value)}
          placeholder="Create New Item"/>
      </div>


    </section>
  );
}

export default App;
