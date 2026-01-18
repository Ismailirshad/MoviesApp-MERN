import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    rating: { type: Number },
    releaseDate: { type: Date },
    duration: { type: Number }, 
    imdbId: { type: String, unique: true, sparse: true }, 
    posterUrl: { type: String }
});

export default mongoose.model('Movie', movieSchema);
