import { Grid, Card, CardContent, Skeleton, Box } from "@mui/material";

const MovieCardSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "background.paper",
        }}
      >
        {/* Poster */}
        <Skeleton
          variant="rectangular"
          height={380}
          animation="wave"
        />

        <CardContent>
          {/* Title */}
          <Skeleton
            variant="text"
            height={28}
            width="90%"
            sx={{ mb: 1 }}
          />

          {/* Subtitle / Genre */}
          <Skeleton
            variant="text"
            height={20}
            width="60%"
            sx={{ mb: 2 }}
          />

          {/* Rating + Duration */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Skeleton variant="text" width={40} height={20} />
            <Skeleton variant="text" width={60} height={20} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MovieCardSkeleton;
