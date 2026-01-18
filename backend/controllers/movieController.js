import Movie from '../models/Movie.js';

// Get all movies (no pagination)
export const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch all movies" });
    }
};

// Get movies with pagination, search, and sorting
export const getMoviesWithPagination = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const sortBy = req.query.sortBy;
        const search = req.query.search;
        const skip = (page - 1) * limit;

        // Build search query
        const searchQuery = {};
        if (search) {
            searchQuery.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        // Build sort options
        let sortOptions = {};
        if (sortBy === 'title') {
            sortOptions.title = 1;
        } else if (sortBy === 'rating') {
            sortOptions.rating = -1;
        } else if (sortBy === 'releaseDate') {
            sortOptions.releaseDate = -1;
        } else if (sortBy === 'duration') {
            sortOptions.duration = 1;
        }

        const movies = await Movie.find(searchQuery).sort(sortOptions).skip(skip).limit(limit);
        const movieCount = await Movie.countDocuments(searchQuery);
        const total = await Movie.countDocuments(searchQuery);

        res.json({
            movies,
            movieCount,
            total,
            page,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            totalMovies: total
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get single movie by ID
export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch movie" });
    }
};

// Create new movie (Admin only)
export const createMovie = async (req, res) => {
    try {
        const { title, rating, description, releaseDate, duration, imdbId, posterUrl } = req.body;

        const movie = await Movie.create({
            title,
            rating,
            description,
            releaseDate,
            duration,
            imdbId,
            posterUrl
        });

        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ message: "Failed to create movie" });
    }
};

// Update movie (Admin only)
export const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedMovie);
    } catch (error) {
        res.status(500).json({ message: "Failed to update movie" });
    }
};

// Delete movie (Admin only)
export const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete movie" });
    }
};
