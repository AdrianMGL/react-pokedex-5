import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import bg from "../../public/pikachu.png";
import Spinner from "./spinner/Spinner";

const PokedexItem = ({ pokedexURL, loading }) => {
  //
  const [pokeItem, setPokeItem] = useState([]);

  //
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(pokedexURL)
      .then((res) => setPokeItem(res.data))
      .catch((error) => console.log(error));
  }, []);

  // console.log(pokeItem);

  /*** */
  if (loading) {
    return <Spinner />;
  }

  return (
    <div onClick={() => navigate(`/pokedexdetail/${pokeItem.id}`)}>
      {/* card */}
      <div className="card">
        <div className="card__bg">
          <img className="card__bg-item" src={bg} alt="" />
        </div>
        <h5 className="card__id">#{pokeItem.id}</h5>
        <img
          src={pokeItem.sprites?.other.home.front_default}
          alt={pokeItem.name}
          className="card__image bx-flashing-hover"
        />
        <h3 className="card__name">{pokeItem.name}</h3>
        {/* body */}
        <div className="card__body">
          <div className="card__weight">
            <span>{pokeItem.weight}</span>
            <h5 className="card__weight-name">Weight</h5>
          </div>

          <div className="card__types">
            {pokeItem.types?.map((type) => (
              <div className="card__types-item" key={type.type.name}>
                <span
                  className={`circle bx-burst-hover ${type.type.name}`}
                ></span>
                <h5 className="card__types-name">{type.type.name}</h5>
              </div>
            ))}
          </div>

          <div className="card__height">
            <span>{pokeItem.height}</span>
            <h5 className="card__height-name">Height</h5>
          </div>
        </div>
        <div className="card__footer">
          <h4 className="abilities">Abilities</h4>
          <div className="card__abilities">
            {pokeItem.abilities?.map((abilitie) => (
              <div
                key={abilitie.ability.name}
                className={`card__ability-name ${pokeItem.types?.[0].type.name}`}
              >
                {abilitie.ability.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexItem;
