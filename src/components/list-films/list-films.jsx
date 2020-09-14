/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable max-classes-per-file */
import React from 'react';

import Spiner from '../spinner/spiner';
import 'antd/dist/antd.css';

import './style.css';

export default class ListFilms extends React.Component {
  render() {
    if (!this.props.data.films) return <Spiner />;
    const array = this.props.data.films.map((item) => {
      return <Film data={item} key={item.id} />;
    });

    return array;
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class Film extends React.Component {
  render() {
    const { title, releaseDate, overview, posterPath } = this.props.data;

    return (
      <div className="movie-block">
        <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${posterPath}`} alt="some pick" />
        <div className="movie-block__content">
          <h1 className="movie-block__title">{title}</h1>
          <span className="movie-block__time">{releaseDate}</span>
          <div className="movie-block__genre">genres</div>
          <p className="movie-block__description">{overview}</p>
        </div>
      </div>
    );
  }
}
