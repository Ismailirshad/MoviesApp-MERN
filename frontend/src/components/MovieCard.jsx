import { memo } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
const POSTER_HEIGHT = 380;
const MovieCard = memo(({ movie, onImageError }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          overflow: "hidden",
          background: "linear-gradient(145deg, #1a1a1a, #0a0a0a)",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 24px rgba(0,0,0,0.6)",
          },
        }}
      >
        <Box
          sx={{
            height: POSTER_HEIGHT,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={movie.posterUrl}
            alt={movie.title}
            loading="lazy"
            onError={() => onImageError(movie._id)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              bgcolor: "rgba(0,0,0,0.8)",
              px: 1.2,
              py: 0.4,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#ffd700", fontWeight: 700 }}
            >
              ★ {movie.rating?.toFixed(1)}
            </Typography>
          </Box>
        </Box>
        <CardContent sx={{ p: 2, textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1rem",
              fontWeight: 700,
              height: "2.6rem",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {movie.title}
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              gap: 1,
              opacity: 0.6,
              fontSize: "0.8rem",
            }}
          >
            <Typography variant="caption">{movie.duration} min</Typography>
            <Typography variant="caption">•</Typography>
            <Typography variant="caption">
              {new Date(movie.releaseDate).getFullYear()}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
});
export default MovieCard;
