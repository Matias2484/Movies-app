import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Buscador.css";
import { addMovieFavorite, getMovies } from "../../actions";
import { BsStar } from "react-icons/bs";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({ title: "" });
  }

  // handleFavorites(movie) {
  //   this.props.addMovieFavorite(movie)
  // }

  render() {
    const { title } = this.state;
    return (
      <div className="contenedor_principal">
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Movie:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              placeholder="Search..."
              className="busqueda"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">SEARCH</button>
        </form>
        <div className="listado">
          <ul>
            {this.props.movies &&
              this.props.movies.map((movie, i) => (
                <li>
                  <div className="titulos" key={i}>
                    {movie.Title}
                  </div>
                  <div>
                    {
                      <button
                        className="btn_fav"
                        onClick={() => this.props.addMovieFavorite(movie)}
                      >
                        <BsStar size={20}/> 
                      </button>
                    }
                  </div>
                  <div>
                    <NavLink to={`/movie/${movie.imdbID}`}>
                      {" "}
                      <img
                        className="movie_img"
                        src={movie.Poster}
                        alt="movie_img"
                      ></img>
                    </NavLink>
                  </div>
                  
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}
//Otra forma de dispatch: export default connect(mapStateToProps, {addMovieFavorite,getMovies}(Buscador))

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
