import React, { useState } from 'react';

import logo from './logo.svg';

function App() {

  // variaveis iniciais 
  const [id, setId] = useState(1);
  const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");
  const [nome, setNome] = useState("bulbasaur");
  const [atk, setatk] = useState ("49");
  const [experiencia, setexperience] = useState(" 64");
  const [tipo, settype] = useState("grass");
  const [def, setdef] = useState("49")

  

  // pesquisa
  const pesquisar = e => {
    e.preventDefault();
    const pesquisar = e.target[0].value;

    fetch('https://pokeapi.co/api/v2/pokemon/'+pesquisar)
    .then(response => response.json())
    .then(data => {
      setId(data.id)
      setNome(data.name)
      setImg(data.sprites.other.dream_world.front_default)
      setexperience(data.base_experience)
      settype(data.types[0].type.name)
      setatk(data.stats[1].base_stat)
      setdef(data.stats[2].base_stat)
    })
  
  }

  return (
    <div className="App">
        <div className="container">

          <div className="row mt-5  align-items-center d-flex justify-content-center">
          <div className="card col-6">

          <div className="input-group mb-3  mt-3">
            {/* iniciar o evento de pesquisar */}
            <form onSubmit={pesquisar}>
              <input type="text" className="form-control" placeholder="ID ou Nome" aria-label="ID ou Nome" aria-describedby="button-addon2" />
              <button className="btn btn-primary"  type="submit" id="button-addon2">Buscar</button> 
            </form>
          </div>

          <h5 className="card-title">{id}</h5> 

          <img src={img} className="card-img-top" alt="logo" />


          <div className="card-body">
            <div className='card-name'><h5 className="card-title">{nome}</h5></div>
            <p className="card-text">atk: {atk}</p>
            <p className="card-text">def: {def}</p>
            <p className="card-text">xp: {experiencia}</p>
            <p className="card-text">type: {tipo}</p>

          </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default App;