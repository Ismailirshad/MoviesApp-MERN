import { useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Button,
  Box,
  Pagination,
} from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MovieContext";
import MovieGridSkeleton from "../components/MovieGridSkeleton";

const Search = () => {
  const { movies, totalPages, fetchMovies, loading } = useMovies();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      setPage(1);
      setHasSearched(true);
      await fetchMovies(1, 10, "", query);
    }
  };

  const handlePageChange = async (event, value) => {
    setPage(value);
    await fetchMovies(value, 10, "", query);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          mb: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 800, textAlign: "center" }}
        >
          Find Your Movie
        </Typography>

        <Box sx={{ display: "flex", gap: 2, width: "100%", maxWidth: 600 }}>
          <TextField
            fullWidth
            label="Search by title or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            InputProps={{
              sx: { borderRadius: 2, bgcolor: "rgba(255,255,255,0.05)" },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ px: 4, borderRadius: 2, fontWeight: "bold" }}
          >
            Search
          </Button>
        </Box>
      </Box>

      {loading ? (
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <MovieGridSkeleton count={8} />
        </Grid>
      ) : !hasSearched ? (
        <Box sx={{ textAlign: "center", opacity: 0.5, mt: 10 }}>
          <Typography variant="h5">
            Enter a Movie keyword, Title or Description to explore the
            collection
          </Typography>
        </Box>
      ) : (
        <>
          {movies.length === 0 ? (
            <Box sx={{ textAlign: "center", opacity: 0.5, mt: 10 }}>
              <Typography variant="h5">No movies found</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Try a different search term
              </Typography>
            </Box>
          ) : (
            <>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{ mb: 6 }}
              >
                {movies.map((movie) => (
                  <MovieCard key={movie._id} movie={movie} />
                ))}
              </Grid>

              {totalPages > 1 && (
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                  sx={{ mt: 4 }}
                />
              )}
            </>
          )}
        </>
      )}

    </Container>
  );
};

export default Search;
