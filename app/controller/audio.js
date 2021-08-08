const audioService = require('../service/audio');
const utils = require('../../lib/utils');

module.exports = {
    storeAudio: async function (req, res) {
        console.log(req.file);

        res.send(200);
    },
};
