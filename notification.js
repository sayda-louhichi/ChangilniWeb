const express = require("express");
const FCM = require('fcm-node');
const router = express.Router();




router.route("/send").post((req, res) => {

    let fcm = new FCM('AAAAsNYM6-0:APA91bE_wIcygnqErxyEOWc0sCtp-26Bf3vrVrwGQJ2kQEsGTtJRsxUltnWeil6ruLEHlbHNTRSeOl6N3T_VYjsilzgH8MMf-nRcS8ZBkfPrbhp3rAixo4bp9Sir7pb6tkvThiXHtlMc');
    
        let message = {
            to:"cqxMFcCcTuClxM3N2J0Z0H:APA91bG03Li1eICPbMoan76QgE7PpTHcyVDE7j3HNo6PYTXrlCkuAhJpvx4yPGZGde-yVUrqBhpYTiM2tgFlfk0nn40ByneuCSz84ZKTzcfeK0_AtYa_RYJHL1Ic18HqQylKDrra5S4N" ,
          
            notification:{
                title : req.body.title,
                body : req.body.body,
                "click_action":"FCM_PLUGIN_ACTIVITY",
                "icon":"fcm_push_icon",
            },
            };
    
            fcm.send(message, function(err, response) {
                if(err){
                    console.log('error found', err);
                }else {
                    console.log('response here', response);
                }
            })
    
    });
            
     
    
    module.exports = router;

