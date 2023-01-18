const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    channelId: {
        type: String,
        required: true,
    },
    channelName: {
        type: String,
        required: true,
    },
    videoTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbURL: {
        type: String,
        required: true,
    },
    publishedAt: {
        type: String,
        required: true,
    },
    timestamps: true
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;