/* eslint-disable no-underscore-dangle */
export default class MoviesApi {
  async searchMovies(query = 'return', page = 1) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=59317f00fdfc1234d6fe0dd816f26a50&query=${query}&page=${page}`
    );

    if (!res.ok) {
      throw new Error(`Could not fetch!!! recived status: ${res.status}`);
    }

    return res.json();
  }

  async getGenres() {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=59317f00fdfc1234d6fe0dd816f26a50&query=return`
    );

    if (!res.ok) {
      throw new Error(`Could not fetch!!! recived status: ${res.status}`);
    }

    return res.json();
  }
}
