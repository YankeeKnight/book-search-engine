const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewURLParser: true,
    useUnifiedTopoloy: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;
