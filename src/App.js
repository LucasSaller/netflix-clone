import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import { requests } from "./requests";
const rows = [
  {
    title: "Netflix Originals",
    request: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  {
    title: "Trending Now",
    request: requests.fetchTrending,
  },
  {
    title: "Top Rated",
    request: requests.fetchTopRated,
  },
  {
    title: "Action Movies",
    request: requests.fetchActionMovies,
  },
  {
    title: "Comedy Movies",
    request: requests.fetchComedyMovies,
  },
  {
    title: "Horror Movies",
    request: requests.fetchHorrorMovies,
  },
  {
    title: "Drama Movies",
    request: requests.fetchDramaMovies,
  },
  {
    title: "Documentaries",
    request: requests.fetchDocumentaries,
  },
];
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div className="rows">
        {rows.map((movie, index) => (
          <Row
            key={index}
            title={movie.title}
            fetchUrl={movie.request}
            isLargeRow={movie.isLargeRow}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
