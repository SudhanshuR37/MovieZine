const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    genre: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgThumbnail: { type: String },
    trailer: { type: String },
    video: { type: String },
    duration: { type: String },
    year: { type: String },
    limit: { type: Number },
    isSeries: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);