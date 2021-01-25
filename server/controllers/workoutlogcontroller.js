let express = require('express');
const Log = require('../db').import('../models/log');
let router = express.Router();
let validateSession = require('../middleware/validate-session');

router.post('/log', validateSession, function(req, res){
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id
    }
    Log.create(logEntry)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({error: err}))

});

router.get('/log', validateSession, (req, res) => {
    //res.send('Gets all logs for an individual user.');
    let userid = req.user.id
    Log.findAll({
        where: {owner_id: userid}
    })
        .then(logs => res.status(200).json(logs))
        .catch(err => res.status(500).json({error: err}))
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