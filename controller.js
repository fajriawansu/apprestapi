'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res){
    response.ok("App REST API is runninggg!", res)
}

/// menampilkan semua data mahasiswa

exports.seeAllMahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(err, rows, fields){
        if(err){
            console.log(err);
        } else {
            response.ok(rows, res);
        }
    })
}

/// menampilkan semua data mahasiswa berdasarkan id

exports.seeAllMahasiswaById = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa where id_mahasiswa = ?', [id], function(err, rows, fields){
        if(err){
            console.log(err)
        } else {
            response.ok(rows, res)
        }
    })
}