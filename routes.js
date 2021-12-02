'use strict';

module.exports = function(app) {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/see')
        .get(myjson.seeAllMahasiswa);

    app.route('/see/:id')
        .get(myjson.seeAllMahasiswaById);
}