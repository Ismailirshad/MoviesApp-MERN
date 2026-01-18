import { useState, useEffect } from "react";
import {
  Container,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  TableContainer,
  Paper,
  Skeleton,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { MovieRow } from "../components/MovieRow";


const MovieRowSkeleton = () => (
  <TableRow>
    <TableCell>
      <Skeleton variant="text" width="60%" height={30} />
    </TableCell>
    <TableCell align="center">
      <Skeleton variant="text" width="30%" height={30} sx={{ mx: "auto" }} />
    </TableCell>
    <TableCell align="center">
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
      </Box>
    </TableCell>
  </TableRow>
);

const AdminDashboard = () => {
  const { movies, loading, totalPages, fetchMovies, deleteMovie } = useMovies();
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetchMovies(page, limit);
  }, [page]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await deleteMovie(id);
        if (movies.length === 1 && page > 1) {
          setPage(prev => prev - 1);
        } else {
          fetchMovies(page, limit); 
        }
      } catch (error) {
        alert("Failed to delete movie");
      }
    }
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
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 800 }}>
          Admin Dashboard
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/admin/add"
          size="large"
        >
          Add Movie
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ width: "100%", bgcolor: "rgba(255,255,255,0.05)", mb: 4 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Rating
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? Array.from({ length: 10 }).map((_, index) => (
                <MovieRowSkeleton key={index} />
              ))
              : movies.map((movie) => (
                <MovieRow
                  key={movie._id}
                  movie={movie}
                  onDelete={handleDelete}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {totalPages > 1 && (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, val) => setPage(val)}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </Container>
  );
};

export default AdminDashboard;
