import express from 'express';
import {
    getAllMovies,
    getMoviesWithPagination,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} from '../controllers/movieController.js';
import { protectRoute, adminRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/all', getAllMovies);
router.get('/', getMoviesWithPagination); 
router.get('/:id', getMovieById); 

// Admin routes 
router.post('/', protectRoute, adminRoute, createMovie); 
router.put('/:id', protectRoute, adminRoute, updateMovie); 
router.delete('/:id', protectRoute, adminRoute, deleteMovie); 

export default router;
