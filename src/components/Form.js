import React from "react";
import testUtils from "react-dom/test-utils";
import QueriedMovie from "./QueriedMovie";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isLoaded: false,
      movie: null,
      ratings: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("event value = " + this.state.value);
    // fuck this
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=84ec104e&S=" +
        this.state.value
    )
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.Search);
          this.setState({
            isLoaded: true,
            movie: result.Search,
          });

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    console.log(this.state.movie);
    //fuck that
  }

  //TODO get ratings and return all rating objects somehow
  

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        {/* <h1>{this.state.movie ? this.state.movie.Title : "Waiting for input..."}</h1> */}
        <label>
          Movie Title:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />

      </form>
        {/* <h5>Release Date: {this.state.movie ? this.state.movie.Released : "null"}</h5>
        <h5>Writer/s: {this.state.movie ? this.state.movie.Writer : "null"}</h5> */}
        { (this.state.movie) ? handleMovies(this.state.movie) : "hi"}
        {/* Display ratings */}
        {/* {(this.state.movie_ratings) ? this.state.movie_ratings.map((rating) => {
            return <h3>{rating.Source}:   {rating.Value}</h3>
        }) : "null"} */}
      </>
    );
  }
}

function handleMovies(movies)
{
  
  movies.map((queriedMovie) => {
    // return (
      console.log(queriedMovie.Title);
      return (
          <QueriedMovie 
            Title={queriedMovie.Title}
            Year={queriedMovie.Year} 
            Type={queriedMovie.Type} 
            Img={queriedMovie.Poster} />
        )
    // ) 
  });
}
export default Form;