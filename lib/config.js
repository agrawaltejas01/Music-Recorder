var config = {
    server: {
        port: 8900,
    },

    mongodb: {
        dbURI:
            process.env.MONGODB_URI ||
            'mongodb://localhost:27017/music-recorder',
        dbOptions: {
            user: process.env.MONGODB_USER || '',
            pass: process.env.MONGODB_PASS || '',
            useFindAndModify: false,
        },
    },

    audioFiles: {
        root: 'audio',
        upload: {
            folder: 'upload',
        },
        download: {
            folder: 'download',
            clipped: {
                folder: 'clipped',
            },
        },
    },
};

module.exports = config;
