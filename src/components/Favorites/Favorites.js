import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Favorites.css";
import { BsStarFill } from "react-icons/bs";

import { removeMovieFavorite } from "../../actions/index";

export class ConnectedList extends Component {
  render() {
    return (
      <div className="contenedor_principal">
        <div className="listado">
          <h2 className="fav_title">Favorite Movies</h2>
          <ul>
            {this.props.moviesFavourites &&
              this.props.moviesFavourites.map((movie, i) => (
                <div key={i}>
                  <li>
                    <button
                      className="btn_fav favorite_icon"
                      onClick={() => this.props.removeFavorite(movie.imdbID)}
                    >
                      <BsStarFill size={20}/> 
                    </button>
                    <div>
                      <NavLink to={`/movie/${movie.imdbID}`}>
                        {" "}
                        <img
                          className="movie_image"
                          src={movie.Poster}
                          alt="movie_img"
                        ></img>
                      </NavLink>
                    </div>
                    <div className="titulos" key={i}>
                      {movie.Title}
                    </div>

                    <div className="year">{movie.Year}</div>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesFavourites: state.moviesFavourites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
