import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Pagination,
  Box,
  TextField,
} from "@mui/material";
import MovieCard from "../components/MovieCard";
import MovieGridSkeleton from "../components/MovieGridSkeleton";
import { useMovies } from "../context/MovieContext";
const Home = () => {
  const { movies, loading, totalPages, fetchMovies } = useMovies();
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [hiddenImages, setHiddenImages] = useState(new Set());
  const handleImageError = (id) => {
    setHiddenImages((prev) => new Set(prev).add(id));
  };
  useEffect(() => {
    setPage(1);
  }, [sortBy]);
  useEffect(() => {
    fetchMovies(page, 12, sortBy);
  }, [page, sortBy]);
  const visibleMovies = movies.filter(
    (movie) => movie.posterUrl && !hiddenImages.has(movie._id),
  );
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Top Rated Movies
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          List of Top best 250 movies from IMDb.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <TextField
            select
            size="small"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            SelectProps={{ native: true }}
            sx={{ minWidth: 200 }}
          >
            <option value="">Default</option>
            <option value="title">Name (A–Z)</option>
            <option value="rating">Rating</option>
            <option value="releaseDate">Release Date</option>
            <option value="duration">Duration</option>
          </TextField>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {loading ? (
          <MovieGridSkeleton count={12} />
        ) : (
          visibleMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onImageError={handleImageError}
            />
          ))
        )}
      </Grid>
      <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
          size="large"
        />
      </Box>
    </Container>
  );
};
export default Home;
