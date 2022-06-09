import "./App.css"
import React,{useState} from "react";
//import FetchPok from "./FetchPok";
import axios from "axios";

function App() {
  const [pokemonName,setpokemonName]=useState("");
  const [pokemonChoosen,setPokemonChoosen]=useState(false);
  const [pokemon,setPokemon]=useState({
    name: "",
    species : "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  const searchPokemon=()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
           //console.log(res); 
           (res)=>{
             setPokemon({
               name: pokemonName,
               species : res.data.species.name,
               img: res.data.sprites.front_default,
               hp: res.data.stats[0].base_stat,
               attack: res.data.stats[1].base_stat,
               defense: res.data.stats[2].base_stat,
               type: res.data.types[0].type.name,
               });
               setPokemonChoosen(true);

           }
       );

  }
  return (
    <div className="App">
      <div className="TitleSection">
      <h1>PokeMon</h1>
      <input type={"text"} onChange={(e)=>{
        setpokemonName(e.target.value);
        
      }}/>
      <br/>
      <button onClick={searchPokemon} >Search</button>
      </div>
      <div className="display">
        {!pokemonChoosen?(<h1>Please Type Your Pokemon</h1>):
        <>
        <img src={pokemon.img}/>
        <h1>{(pokemon.name).toUpperCase()}</h1>
        <h3>Species:{pokemon.species}</h3>
        <h3>Type:{pokemon.type}</h3>
        <h3>Attack:{pokemon.attack}</h3>
        <h3>Defense:{pokemon.defense}</h3>
        <h3>HP:{pokemon.hp}</h3>
        </>
        }
      </div>
    </div>
  );
  }


export default App;
