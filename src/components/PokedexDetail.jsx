import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../assets/style/pokedexDetail.css";
import bg from "../../public/pikachu.png";
import pokeball from "../../public/pokeball.png";

const PokedexDetail = () => {
  //
  const { id } = useParams();

  //
  const [pokeDetail, setPokeDetail] = useState([]);

  /** */
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokeDetail(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  // console.log(pokeDetail);

  return (
    <div className="container-fluid">
      <div className="container__detail">
        <h3>Pokedex Detail</h3>
        <Link className="btn btn-outline-secondary my-3" to="/pokedex">
          <i className="bx bxs-left-arrow"></i> Back
        </Link>
        <div className="card__detail">
          <div className="card__bg-deta">
            <img className="card__bg-detail" src={bg} alt="" />
          </div>
          <div className="card__header-detail">
            <div className="card__header-name">
              <img className="card__icon bx-spin" src={pokeball} alt="" />
              <span>{pokeDetail.name}</span>
            </div>
            <span>#{pokeDetail.id}</span>
          </div>
          <img
            src={pokeDetail.sprites?.other.home.front_default}
            alt={pokeDetail.name}
            className="card__image-deta bx-fade-down-hover"
          />
          <div className="card__body-detail">
            <div className="card__types-deta">
              {pokeDetail.types?.map((type) => (
                <div className="card__type-item" key={type.type.name}>
                  <h5 className={`card__type-name  ${type.type.name}`}>
                    {type.type.name}
                  </h5>
                </div>
              ))}
            </div>
            <div className="card__about">
              {/* About */}
              <h4
                className={`card__about-title  ${pokeDetail.types?.[0].type.name}`}
              >
                About
              </h4>
              <div className="card__description">
                <p>
                  Lorem ipsum dolor, sit amet rety sunt cum deleniti wfca
                  reprehenderit unde sit amet rety sunt cum deleniti wfca
                  reprehenderit unde labore voluptates velit! Tenetur?
                </p>
              </div>
              <div className="card__weight-deta">
                <h4 className="card__weight-name">Weight</h4>
                <span>{pokeDetail.weight} </span>
              </div>
              <div className="card__height-deta">
                <h4 className="card__height-name">Height</h4>
                <span>{pokeDetail.height}</span>
              </div>
              <div className="card__abilities-detail">
                <h4 className="abilities__name">Abilities</h4>
                <div className="card__abilities-deta">
                  {pokeDetail.abilities?.map((abilitie) => (
                    <div
                      key={abilitie.ability.name}
                      className="card__ability-deta"
                    >
                      {abilitie.ability.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Status */}
            <div className="card__status mx-3 mt-3">
              <h4
                className={`card__status-title  ${pokeDetail.types?.[0].type.name}`}
              >
                Status
              </h4>
              <div className="card__status-deta mx-2 mt-2">
                {pokeDetail.stats?.map((stat) => (
                  <>
                    <div key={stat.stat.name} className="card__statu-detaName">
                      {stat.stat.name}
                    </div>
                    <div
                      key={stat.base_stat}
                      className="card__statu-detaNumber"
                    >
                      <div className="progress mt-1">
                        <div
                          className={`progress-bar progress-bar-striped progress-bar-animated ${stat.stat.name}`}
                          role="progressbar"
                          aria-label="Default striped example"
                          style={{ width: stat.base_stat }}
                          aria-valuenow={{ width: stat.base_stat }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {stat.base_stat}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="card__moves">
              <h4
                className={`card__moves-title  ${pokeDetail.types?.[0].type.name}`}
              >
                Moves
              </h4>
              <div className="card__moves-deta">
                {pokeDetail.moves?.map((move) => (
                  <div key={move.move.name} className="card__move-deta">
                    {move.move.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexDetail;
