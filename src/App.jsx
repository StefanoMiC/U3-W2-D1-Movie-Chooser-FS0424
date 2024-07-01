import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNav from "./components/CustomNav";
import { Col, Container, Row } from "react-bootstrap";
import MovieSelect from "./components/MovieSelect";
import { Component } from "react";
import MovieCard from "./components/MovieCard";

class App extends Component {
  state = {
    movieTitle: "Venom"
  };

  changeMovieTitle = newTitle => {
    this.setState({ movieTitle: newTitle });
  };

  render() {
    return (
      <>
        <CustomNav brandName="Movie Chooser" />
        <main>
          <Container>
            <Row className="justify-content-center mt-5">
              <Col xs={12} md={6}>
                <MovieSelect movieTitle={this.state.movieTitle} changeMovieTitle={this.changeMovieTitle} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <MovieCard movieTitle={this.state.movieTitle} />
              </Col>
            </Row>
          </Container>
        </main>
      </>
    );
  }
}

export default App;
