'use strict';

module.exports = function(app) {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/see')
        .get(myjson.seeAllMahasiswa);

    app.route('/see/:id')
        .get(myjson.seeAllMahasiswaById);

    app.route('/add')
        .post(myjson.addMahasiswa);

    app.route('/edit')
        .put(myjson.editMahasiswaById);

    app.route('/delete/:id')
        .delete(myjson.deleteMahasiswaById);
    
    app.route('/get-group-matakuliah')
        .get(myjson.getGroupMatakuliah);
}