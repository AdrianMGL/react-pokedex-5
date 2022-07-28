import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/style/pokedex.css";
import pokeball from "../../public/pokeball.png";
import Pagination from "../components/Pagination";

//redux
import { useSelector } from "react-redux";
import PokedexItem from "./PokedexItem";
import { useNavigate, Link } from "react-router-dom";

const Pokedex = () => {
  //
  const [pokedexs, setPokedexs] = useState([]);
  const [pokedexSearch, setPokedexSearch] = useState("");
  const [types, setTypes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokedexsPerPage, setPokedexPerPage] = useState(25);

  //
  const navigate = useNavigate();

  //
  const coach = useSelector((state) => state.coach);

  /** */
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => setPokedexs(res.data.results))
      .catch((error) => console.log(error));
    setLoading(false);

    //
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  /** */
  const search = (e) => {
    e.preventDefault();
    navigate(`/pokedexdetail/${pokedexSearch}`);
  };

  /** */
  const filterLocation = (e) => {
    axios
      .get(e.target.value)
      .then((res) => setPokedexs(res.data.pokemon))
      .catch((error) => console.log(error));
  };

  /** Get current posts */
  const indexOfLastPokedex = currentPage * pokedexsPerPage;
  const indexOfFisrtPokedex = indexOfLastPokedex - pokedexsPerPage;
  const currentPokedexs = pokedexs.slice(
    indexOfFisrtPokedex,
    indexOfLastPokedex
  );

  /** Change page */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //console.log(pokedexs);

  return (
    <div className="container-fluid ">
      <div className="container__welcome">
        <img className="card__icon-welcome bx-burst" src={pokeball} alt="" />
        <div>
          Welcome <h4 className="name__coach">{coach}</h4>
          <h5>Find your favorite pokemon</h5>
        </div>
      </div>
      <div className="form">
        <Link className="btn btn-outline-secondary my-3" to="/">
          <i className="bx bxs-left-arrow"></i> Back
        </Link>
        {/* SEARCH */}
        <form onSubmit={search}>
          <input
            className="input"
            type="text"
            value={pokedexSearch}
            placeholder="pokemon"
            onChange={(e) => setPokedexSearch(e.target.value)}
          />
          <button className="btn btn-outline-success mx-2 ">
            Search <i className="bx bx-search-alt"></i>
          </button>
        </form>

        {/* SELECT */}
        <select onChange={filterLocation}>
          <option value="">Select type pokemon </option>
          {types.map((type) => (
            <option value={type.url} key={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="wrapper">
        {currentPokedexs.map((pokedex) => (
          <div
            className="items"
            key={pokedex.url ? pokedex.url : pokedex.pokemon.url}
          >
            <div className="item">
              <PokedexItem
                pokedexURL={pokedex.url ? pokedex.url : pokedex.pokemon.url}
                loading={loading}
              />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        pokedexsPerPage={pokedexsPerPage}
        totalPokedexs={pokedexs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Pokedex;
