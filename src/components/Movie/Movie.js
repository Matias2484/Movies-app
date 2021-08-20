import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMovieDetail(id);
  }

  render() {
    return (
      <div className="movie_card">
        <div className="container">
          <div className="movie_poster">
            <img src={this.props.movieDetail.Poster} alt="movie_img" />
          </div>
          <div className="movie_info">
            <h2 className="movie_title">{this.props.movieDetail.Title}</h2>
            <span className="card_director">Director</span>
            <p>{this.props.movieDetail.Director}</p>
            <span className="card_year">Year</span>
            <p>{this.props.movieDetail.Released}</p>
            <span className="card_plot">Plot</span>
            <p>{this.props.movieDetail.Plot}</p>
            <span className="card_actors">Actors</span>
            <p>{this.props.movieDetail.Actors}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail,
  };
};

export default connect(mapStateToProps, { getMovieDetail })(Movie);
