import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Movies(props) {
  const { counter, increase } = props;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const searchReference = useRef();

  async function ApiCall() {
    try {
      setLoading(true);
      const r = await Axios.get("https://yts.mx/api/v2/list_movies.json");
      setMovies(r.data.data.movies);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    ApiCall();
  }, []);

  async function SearchFilm(e) {
    e.preventDefault(); //includes refreshing the page or auto submitting the form
    try {
      setLoading(true);
      const r = await Axios.get(
        `https://yts.mx/api/v2/list_movies.json?query_term=${search}`
      );
      setMovies(r.data.data.movies);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      searchReference.current.value = "";
    }
  }

  return (
    <>
      <Link to="/two">Go to second component</Link>

      <form onSubmit={SearchFilm}>
        <br></br>
        <input
          ref={searchReference}
          style={{ height: "10vh", padding: "1%" }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Enter Search"
        ></input>
        <button type="submit" disabled={loading}>
          {loading ? <h1>Loading...</h1> : <h1>Search</h1>}
        </button>
      </form>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : movies && movies.length ? (
            movies.map((rukshan, index) => (
              <div key={rukshan.id || index}>
                <h1>
                  {rukshan?.title ? rukshan.title : <h1>No title found</h1>}
                </h1>
                <img
                  src={rukshan?.large_cover_image || "Unavailable"}
                  alt={`image for ${rukshan?.title}`}
                ></img>
                <p>
                  {rukshan?.description_full || <h1>No description found</h1>}
                </p>
                <a href={rukshan?.url}>
                  {rukshan?.url ? (
                    `Click to view more about ${rukshan?.title}`
                  ) : (
                    <h1>No Link Provided</h1>
                  )}
                </a>
              </div>
            ))
          ) : (
            <h1>No results found</h1>
          )}
        </div>
      )}
    </>
  );
}

export default Movies;
