import { Movie } from "../types";


interface props {
	movies: Array<Movie>
}
export const MovieResults: React.FC<props> = ({movies}) => (
	<ul>
		{movies.map(movie => (
			<li key={movie.Title}>
				<h1>{movie.Title} ({movie.Year})</h1>
				<p>{movie.Type}</p>
				<img alt={movie.Title} src={movie.Poster} />
			</li>
		))}
	</ul>
)	