import { useState } from "react";
// hora 1:00:08 de video


const anadir = () => {

let personaje = {
    nombre:"",
    imagen:"",
    year:"",
}

    const [newPersonaje, setNewPersonaje] = useState({personaje});

    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [year, setYear] = useState(0);

    const createPersonaje = (ev) => {
        ev.preventDefault();
        
      console.log(nombre, imagen, year);
      setNewPersonaje({
        nombre: nombre,
        imagen: imagen,
        year: year
      })
      console.log(newPersonaje)
    }

    return (
    <>
    <div class="anadir">
        <form onSubmit={(ev) => createPersonaje(ev)}>
            <fieldset>
                <legend>crea un personaje</legend>
                <label htmlFor="nombre">nombre:</label>
                <input type="text" name="nombre" id="nombre" onChange={(ev) => setNombre(ev.target.value)}></input>
                <label htmlFor="imagen">imagen:</label>
                <input type="text" name="imagen" id="imagen" onChange={(ev) => setImagen(ev.target.value)}></input>
                <label htmlFor="year">year:</label>
                <input type="number" name="year" id="year" min={2000}  onChange={(ev) => setYear(ev.target.value)}/>

            </fieldset>
            <input type="submit" value="create"/>
        </form>
    </div>
    
    </>
);}

export default anadir;