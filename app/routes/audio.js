var router = require('express').Router();
var audioController = require('../controller/audio');
var multer = require('multer');
var config = require('../../lib/config');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(
            null,
            `${config.audioFiles.root}/${config.audioFiles.upload.folder}`
        );
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

var upload = multer({
    storage: storage,
    limits: { fieldSize: 2 * 1024 * 1024 },
});

// .put(upload.single("agreement"), controllers.publisher.updateAgreementData);
router.route('/').post(upload.single('audio'), audioController.storeAudio);

module.exports = router;
