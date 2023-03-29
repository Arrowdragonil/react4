import { useState, useEffect } from "react";
import { useDebounce } from 'use-debounce'
import { getData } from "../services/services";
import { v4 as uuidv4 } from "uuid";
import "./Effect.css"
/* import { ReactDOM } from "react"; */
export const EffectF = () => {
    const [filter, setFilter] = useState('David')
    const [listPersonajes, setListaPersonajes] = useState([]);

    const [df] = useDebounce(filter, 100);

    /* useEffect(() => {
        getData(filter).then((personajes) => setListaPersonajes([personajes]))
        console.log(listPersonajes)
    }, [df]) */

    useEffect(()=>{
        (async () => {
          const data = await getData(filter)
          setListaPersonajes(data)
        })()
      },[filter])
      console.log(listPersonajes)
    

    /* ReactDOM.render(<listPersonajes/>, document.getElementById("root")); */
    return (
        <>
        
        <input type="text" value={filter} onChange={(ev) => setFilter(ev.target.value)} />
        <ul>
            {listPersonajes.map((personajes) => (
                
                <li key={uuidv4()} class="list">
                <h1>{personajes.name} {personajes.surname} <audio src={personajes.song} type="audio/mp3" controls autoplay /></h1>                
                <img src={personajes.image}/>
                {/* <bgsound src={personajes.song} loop="infinite" autoplay="autoplay"></bgsound> */}
                
                
                </li>
                
            ))
            }
            
            
            {listPersonajes.map((info) => (
                <p class="info">{info.info}</p>
            ))

            }
        </ul>
        
        </>
    )
                
}