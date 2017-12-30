const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/tasks', function(req, res) {
    Task.find({}).then(function(result) {
        res.send(result);
    });
});

router.post('/tasks', function(req, res, next) {
   Task.create(req.body).then(function(result) {
        res.send(result);
    }).catch(next);
});

router.put('/tasks/:id', function(req, res, next) {
    Task.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
        Task.findById({_id: req.params.id}).then(function(result) {
            res.send(result);
        });
    }).catch(next);
});

router.delete('/tasks/:id', function(req, res, next) {
    Task.findByIdAndRemove({_id: req.params.id}).then(function(deleted) {
        res.send(deleted);
    }).catch(next);
});

module.exports = router;