import React from "react";

const Pagination = ({ pokedexsPerPage, totalPokedexs, paginate }) => {
  //
  const pageNumbers = [];

  //
  for (let i = 1; i <= Math.ceil(totalPokedexs / pokedexsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="content__page">
      <ul className="pagination__pokedex">
        {pageNumbers.map((number) => (
          <li key={number} className="one">
            <a onClick={() => paginate(number)} className=" two">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
