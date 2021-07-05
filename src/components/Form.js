import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isLoaded: false,
      movie: null,
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
      "http://www.omdbapi.com/?i=tt3896198&apikey=84ec104e&t=" +
        this.state.value
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            movie: JSON.stringify(result),
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

  render() {
    const { error, isLoaded, movies } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>You chose: {this.state.movie ? this.state.movie.Title : "a"}</h1>
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
    );
  }
}

export default Form;
