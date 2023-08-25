function MovieCard(props) {
  //the join method array is used to create a new string separated by "|" character 
  const genres = props.data.show.genres.join(' | ')
  //the optional chain operator is used to access property object even if the object is null/undefined
  return (
    <div className="movie-card">
      <div className="movie-image">
      <img src={props.data.show.image?.medium}/> 
      </div>
      <h3 className="movie-heading">{props.data.show.name}</h3>
      <div className="movie-rating">⭐{props.data.show.rating.average || '3.4'}</div>
      <h5 className="movie-genre">{genres}</h5>
      <button className="site-url"><a href={props.data.show.url}>Official Site</a></button>
      
    </div>
  );
}

export default MovieCard;