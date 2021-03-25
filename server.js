//import dependicies
require('dotenv').config();
const express =require('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const passport=require('passport');

//initialisation app avec express
const app = express();

const AdminRoutes = require('/ChangilniAdmin/route/admins');
const ChefRoutes = require('/ChangilniAdmin/route/chefParcs');
const EmployeurRoutes = require('/ChangilniAdmin/route/employeurs');


//connection database
mongoose.connect(process.env.DATABASE );
mongoose.connection.on('connected',()=>{
    console.log('connected to the database');
});
mongoose.connection.on('error',(err)=>{
    console.log('unable to connect to the database'+ err);
});
//Déclaration Port
const _PORT =process.env.PORT;

//---------Middlewares---------///
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.get('/',(req,res,next)=>{
    res.send('bonjour')
});

app.use('/admin',AdminRoutes);
app.use('/chefParc',ChefRoutes);
app.use('/employeur',EmployeurRoutes);

//Démarrer le service
app.listen(_PORT,()=>{
console.log('server started');
})
