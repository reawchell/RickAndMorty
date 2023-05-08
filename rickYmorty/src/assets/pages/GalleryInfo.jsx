import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import "./GalleryInfo.scss";

const GalleryInfo = () => {
    const {id} = useParams()
    // console.log(id);
    const [character,setCharacter] = useState({})

    useEffect(() => {
        const getCharacterById = async () => {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            // console.log(res.data);
            setCharacter(res.data)
        }
        getCharacterById()
    },[id])
  return (
    <div className="info">
    {character ? (
        <>
        <h2>{character.status}</h2>
        <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
                <p>{character.gender}</p>
                
        </>
    ) : null}
</div>
  )
}

export default GalleryInfo
