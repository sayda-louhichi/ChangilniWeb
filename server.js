//import dependicies
require('dotenv').config();
const express =require('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const passport=require('passport');
const path = require('path');
const cors = require('cors');


//initialisation app avec express
const app = express();

const AdminRoutes = require('/changilniWeb/route/admins');
const ChefRoutes = require('/changilniWeb/route/chefParcs');
const userRoute=require("./route/user.route");
const immatriculeRoute=require("./route/immatricule.route");
const profileRoute=require("./route/profile.route");
const employeeRoute=require("./route/employee.route");
const releveRoute=require("./route/releve.route");
const notifRoute=require("/changilniWeb/notification")
//const UserRoutes =require('/changilniWeb/route/users')


//connection database
mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,});
mongoose.connection.on('connected',()=>{
    console.log('connected to the database');
});
mongoose.connection.on('error',(err)=>{
    console.log('unable to connect to the database'+ err);
});
//Déclaration Port
const _PORT =process.env.PORT;

//---------Middlewares---------///
app.use("/uploads",express.static("uploads"));
//app.use("/uploadsReleve",express.static(path.join("uploadsReleve")));
app.use("/uploadsReleve", express.static("uploadsReleve"));  

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
//require('./config/paasport')(passport);
//static public 
//app.use(express.static(path.join(__dirname,'public')));


//Routes
app.get('/',(req,res,next)=>{
    res.send('bonjour')
});

app.use('/admin',AdminRoutes);
app.use('/chefParc',ChefRoutes);
app.use("/employee",employeeRoute);
app.use("/releve",releveRoute);
app.use("/user",userRoute);
app.use("/immatricule",immatriculeRoute);
app.use("/profile",profileRoute);
app.use("/notification",notifRoute);
//app.use('/user',UserRoutes)
//Démarrer le service
app.listen(_PORT,"0.0.0.0",()=>{
console.log('server started');
})
