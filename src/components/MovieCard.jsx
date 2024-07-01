import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class MovieCard extends Component {
  state = {
    movieObj: null
  };

  fetchMovieData = async () => {
    console.log("fetch");
    const resp = await fetch("http://www.omdbapi.com/?apikey=43a932c8&s=" + this.props.movieTitle);

    const movieData = await resp.json();
    this.setState({ movieObj: movieData.Search[0] });
  };

  //   componentDidUpdate(prevProps, prevState) {}

  componentDidUpdate(prevProps) {
    // intercetta qualsiasi aggiornamento del componente (fase di UPDATE)
    // quindi verrà avviato ad ogni cambio di state o props

    // prevProps e prevState sono i due parametri propri di componentDidUpdate
    // sono ciò che lo differenzia da un comune render()

    // nel nostro caso vogliamo che this.fetchMovieData() venga invocato quando viene scelto un nuovo titolo in App.jsx
    // quindi quando il nostro componente MovieCard riceve nuove props corrispondenti a this.state.movieTitle di App

    console.log("componentDidUpdate MovieCard");
    console.log("PREV PROPS", prevProps.movieTitle);
    console.log("THIS PROPS", this.props.movieTitle);

    // quello che non vogliamo succeda è di invocare this.fetchMovies() più di una volta

    // creare una condizione di guardia è OBBLIGATORIO quando si usa componentDidUpdate
    // la condizione è necessaria ad evitare loop infiniti di aggiornamento causati dal setState che fa aggiornare il componente ugualmente.

    if (prevProps.movieTitle !== this.props.movieTitle) {
      this.fetchMovieData();
    } else {
      // se siamo qui è probabilmente per via di un setState avviato dentro this.fetchMoviesData che scatena un nuovo update,
      // ma rispetto a prima le props non saranno diverse questa volta e quindi abbiamo lo STOP.
      console.log("no new props, STOP!");
    }
  }

  //   questo metodo ci permette di avviare la funzione al caricamento iniziale del componente (fase di MOUNT)
  componentDidMount() {
    console.log("componentDidMount MovieCard");
    this.fetchMovieData();
  }

  render() {
    // this.fetchMovies() // non posso chiamare fetchMovies dentro render === LOOP INFINITO
    console.log("RENDER MovieCard");
    if (this.state.movieObj) {
      const { Poster, Title, Year, Type } = this.state.movieObj;
      return (
        <Card>
          <Card.Img variant="top" src={Poster} />
          <Card.Body>
            <Card.Title>
              {Title} — {Type}
            </Card.Title>
            <Card.Text>{Year}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default MovieCard;
