let express = require('express');
let router = express.Router();

router.post('/log', function(req, res){
    res.send('Allows users to create a workout log with descriptions, definitions, results, and owner properties.');
});

router.get('/log', function(req, res){
    res.send('Gets all logs for an individual user.');
});

router.get('/log/:id', function(req, res){
    res.send('Gets individual logs by id for an individual user.');
});

router.put('/log/:id', function(req, res){
    res.send('Allows individual logs to be updated by a user.');
});

router.delete('/log/:id', function(req, res){
    res.send('Allows individual logs to be deleted by a user.');
});

module.exports = router;