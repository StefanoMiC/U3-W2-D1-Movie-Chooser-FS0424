import { FormSelect } from "react-bootstrap";

const MovieSelect = ({ movieTitle, changeMovieTitle }) => (
  <FormSelect aria-label="Select movie" value={movieTitle} onChange={e => changeMovieTitle(e.target.value)}>
    <option>Venom</option>
    <option>Iron Man</option>
    <option>Dr. Strange</option>
    <option>Wonder Woman</option>
    <option>Black Panther</option>
    <option>Batman</option>
    <option>Hulk</option>
    <option>Deadpool</option>
  </FormSelect>
);

export default MovieSelect;
