var mongoose = require('mongoose');
var App = require('./../constants/index');
const StartConnection = async () => {
    let result = await mongoose.connect(App.data_base_uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return result;
}

module.exports = { StartConnection };