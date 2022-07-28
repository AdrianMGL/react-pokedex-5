import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../assets/style/pokedexInput.css";
import bg from "../../public/pokemonBg.png"
//
import { changeCoach } from "../store/slice/coach.slice";

const PokedexInput = () => {
  //
  const [coach, setCoach] = useState("");

  //
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** */
  const submit = (e) => {
    e.preventDefault();
    navigate("/pokedex");
    dispatch(changeCoach(coach));
  };

  return (
    <div className="container__input">
      <figure className="card__bg">
        <img className="card__bg-item " src={bg} alt="" />
      </figure>
      <div className="wrapper__input">
        <h2>Coach</h2>
        <form onSubmit={submit} className='form__welcome'>
          <div className="input">
            <input
              type="text"
              name="coach"
              id="coach"
              placeholder="Enter you name coach"
              value={coach}
              onChange={(e) => setCoach(e.target.value)}
            />
          </div>
          <button>Game</button>
        </form>
      </div>
    </div>
  );
};

export default PokedexInput;
