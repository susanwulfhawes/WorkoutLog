let express = require('express');
let app = express();
let sequelize = require("./db");
let workout = require('./controllers/workoutlogcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();
//sequelize.sync({force: true})

app.use(express.json());
app.use('/user', user);
app.use('/workout', workout);


app.listen(3000, function(){
    console.log('App is listening on port 3000');
})