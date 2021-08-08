const searchData = require('../data/audio');
var ffmpeg = require('fluent-ffmpeg');
var config = require('../../lib/config');

var uploadFolder = `${config.audioFiles.root}/${config.audioFiles.upload.folder}`;
var downloadFolder = `${config.audioFiles.root}/${config.audioFiles.download.folder}`;
var clippedFolder = `${config.audioFiles.root}/${config.audioFiles.download.folder}/${config.audioFiles.download.clipped.folder}`;

module.exports = {
    trimAudio: function (fileName) {
        var inputPath = `${uploadFolder}/${fileName}`;
        var outputPath = `${clippedFolder}/${fileName}`;
        try {
            var result = ffmpeg(inputPath)
                .inputOptions('-t 3')
                .output(outputPath)
                .run();
            console.log(result);
        } catch (error) {
            throw error;
        }
    },
};
