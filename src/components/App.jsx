/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { Pagination } from 'antd';
import Header from './header/header';
import MoviesApi from '../movies-api/movies-api';

import ListFilms from './list-films/list-films';
import 'antd/dist/antd.css';

export default class App extends React.Component {
  movie = new MoviesApi();

  state = {
    films: null,
    loading: true,
    error: false,
    emptyToggle: false,
    query: 'return',
    currentPage: 1,
    total: null,
  };

  componentDidMount() {
    this.updateFilms();
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.updateFilms(this.state.queryStatus);
    }
  }

  setPage(e) {
    this.setState({ currentPage: e });
  }

  onChange = (query) => {
    if (query.length === 0) {
      query = 'return';
    }
    this.setState({ queryStatus: query, currentPage: 1 });
    this.updateFilms(query);
  };

  clearState() {
    this.setState({ films: null });
  }

  updateFilms(query) {
    this.clearState();
    this.movie.searchMovies(query, this.state.currentPage).then((array) => {
      const allFilmsWithProps = array.results.map((film) => {
        return {
          id: film.id,
          title: film.title,
          releaseDate: film.release_date,
          overview: film.overview,
          posterPath: film.poster_path,
        };
      });

      this.setState(({ films, loading, total }) => {
        return { films: allFilmsWithProps, loading: false, total: array.total_pages };
      });
      if (!this.state.films || this.state.films.length === 0) {
        this.setState(({ emptyToggle }) => {
          return { emptyToggle: true };
        });
      } else this.setState({ emptyToggle: false });
    });
  }

  render() {
    const content = this.state.emptyToggle ? <div>No content on this query</div> : <ListFilms data={this.state} />;
    return (
      <>
        <Header onChange={this.onChange} />
        {content}
        <Pagination
          onChange={(e) => this.setPage(e)}
          defaultCurrent={this.state.currentPage}
          total={20 * this.state.total}
          pageSize={20}
        />
      </>
    );
  }
}
