import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../axios/axios";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=1&q=elite%20trailer&key=[YOUR_API_KEY]
      let trailerRequest = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
          movie?.title || movie?.name || movie?.originalName
        }+trailer&type=video&key=AIzaSyDY__RwJEgRdbuN8Yyv8QVew63ulASrUNA`
      );
      setTrailerUrl(trailerRequest.data.items[0].id.videoId);
    }
  };

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {movies &&
          movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  onClick={() => handleClick(movie)}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  key={movie.id}
                />
              )
          )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
