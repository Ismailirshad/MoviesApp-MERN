import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGridSkeleton = ({ count = 10 }) => {
  return Array.from(new Array(count)).map((_, index) => (
    <MovieCardSkeleton key={index} />
  ));
};

export default MovieGridSkeleton;
