import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Gallry.scss";


const url = "https://rickandmortyapi.com/api/character";

const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(`${url}?page=${page}`);
      const data = res.data;
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    };

    getCharacters();
  }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="galeria">
      {/* <h2>Gallery</h2> */}
      {characters.map((character) => (
        <Link key={character.id} to={`${character.id}`}>
          <figure>
            <h3>{character.name}</h3>
            <img className="img" src={character.image} alt={character.name} />
          </figure>
        </Link>
      ))}
      <div>
        <button className="boton-anterior" disabled={page === 1} onClick={handlePrevPage}>
          Anterior
        </button>
        <button className="boton-siguiente" disabled={page === totalPages} onClick={handleNextPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Gallery;
