const express = require("express");
const FCM = require('fcm-node');
const router = express.Router();




router.route("/send").post((req, res) => {

    let fcm = new FCM('AAAAsNYM6-0:APA91bE_wIcygnqErxyEOWc0sCtp-26Bf3vrVrwGQJ2kQEsGTtJRsxUltnWeil6ruLEHlbHNTRSeOl6N3T_VYjsilzgH8MMf-nRcS8ZBkfPrbhp3rAixo4bp9Sir7pb6tkvThiXHtlMc');
    
        let message = {
            to:"e1yVGlTVR9exU1PWiZQTfO:APA91bHFxbEAB_4GtrsXcDkGNPEe7fVLlfus7lFmPRnryrdDCkKFxzN_-QZYE6lWm-Ub9bU11Ubw2e3wgFVxEm310BAFQpXm5NalzXl_t9YWkAc9qVFCoXQmXra10apmqO8jFrEWZZxY" ,
          
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

