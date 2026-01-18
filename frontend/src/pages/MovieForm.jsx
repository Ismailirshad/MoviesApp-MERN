import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useMovies } from "../context/MovieContext";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMovieById, createMovie, updateMovie } = useMovies();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
    duration: "",
  });

  useEffect(() => {
    if (id) {
      getMovieById(id)
        .then((data) => setFormData(data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateMovie(id, formData);
      } else {
        await createMovie(formData);
      }
      navigate("/admin");
    } catch (error) {
      alert("Failed to save movie");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        {id ? "Edit Movie" : "Add Movie"}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <TextField
          label="Rating"
          name="rating"
          type="number"
          value={formData.rating}
          onChange={handleChange}
        />
        <TextField
          label="Duration (min)"
          name="duration"
          type="number"
          value={formData.duration}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" size="large">
          {id ? "Update" : "Create"}
        </Button>
      </Box>
    </Container>
  );
};

export default MovieForm;
