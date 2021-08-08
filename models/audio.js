const mongo = require('mongoose');
const Schema = mongo.Schema;

const videoSchema = new Schema(
    {
        title: { type: String, index: true },
    },

    {
        versionKey: false,
    }
);

const Video = mongo.model('videos', videoSchema, 'videos');
module.exports = Video;
