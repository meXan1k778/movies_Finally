apinkey https://api.themoviedb.org/3/movie/550?api_key=59317f00fdfc1234d6fe0dd816f26a50

updateFilm() {
const id = 855;
this.movie.getMovie(id).then((film) => {
const elements = film.genres.map((item) => {
return <span key={item.id}>{item.name}</span>;
});

      this.setState({
        title: film.title,
        releaseDate: film.release_date,
        genres: elements,
        overview: film.overview,
        posterPath: film.poster_path,
      });
    });

}

Как обрабатывать ошибки? fetch когда вернет reject
Событийная модель JS? (Capturing / Bubbling)

вопрос с пробелом в инпуте? trim?
убрать количство фильмов на странице
