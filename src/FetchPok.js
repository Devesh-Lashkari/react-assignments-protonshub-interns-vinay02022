import React,{useState} from "react";
import axios from "axios";
function FetchPok() {
    const [data,setDats]=useState([]);
   const startdataFlow=()=>{
       //console.log("clicked");
       axios.get("https://pokeapi.co/api/v2/pokemon/ivysaur").then((res)=>{
           console.log(res);  
       })
    }
    return(
        <>
        <button onClick={startdataFlow}>ShowData</button>
        </>
    )
}
    export default FetchPok;