const audioService = require('../service/audio');
const utils = require('../../lib/utils');

module.exports = {
    storeAudio: async function (req, res) {
        var file = req.file;
        var fileName = file.filename;
        try {
            await audioService.trimAudio(fileName);
            res.send(200);
        } catch (error) {
            console.log(error);
            res.send(500);
        }
    },
};
