import { createContext, useState, useContext } from "react";
import api from "../api/axios.js";

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalMovies, setTotalMovies] = useState(0);

  // Get all movies with pagination, search, and sorting
  const fetchMovies = async (
    page = 1,
    limit = 12,
    sortBy = "",
    search = "",
  ) => {
    try {
      setLoading(true);
      const { data } = await api.get("/movies", {
        params: { page, limit, sortBy, search },
      });
      setMovies(data.movies);
      setTotalPages(data.totalPages);
      setTotalMovies(data.totalMovies);
      return data;
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getMovieById = async (id) => {
    try {
      const { data } = await api.get(`/movies/${id}`);
      return data;
    } catch (error) {
      console.error("Failed to fetch movie:", error);
      return null;
    }
  };

  const createMovie = async (movieData) => {
    try {
      const { data } = await api.post("/movies", movieData);
      return data;
    } catch (error) {
      console.error("Failed to create movie:", error);
      throw error;
    }
  };

  const updateMovie = async (id, movieData) => {
    try {
      const { data } = await api.put(`/movies/${id}`, movieData);
      return data;
    } catch (error) {
      console.error("Failed to update movie:", error);
      throw error;
    }
  };

  const deleteMovie = async (id) => {
    try {
      await api.delete(`/movies/${id}`);
      return true;
    } catch (error) {
      console.error("Failed to delete movie:", error);
      throw error;
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        totalPages,
        totalMovies,
        fetchMovies,
        getMovieById,
        createMovie,
        updateMovie,
        deleteMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
