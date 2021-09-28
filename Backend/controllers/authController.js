const SpotifyWebApi = require('spotify-web-api-node');

var authController={};

authController.login=function(req,res){
    const code=req.body.code;

    const spotifyAPI=new SpotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId:'0372f92e946c4259a6ca98ac22351161',
        clientSecret:'e15462f8885a4f9e92e88e99b2b67364'
    })

    spotifyAPI.authorizationCodeGrant(code).then(data=>{
        res.json({
            accessToken:data.body.access_token,
            refreshToken:data.body.refresh_token,
            expiresIn:data.body.expires_in,
        })   
    })
    .catch((err)=>{
        res.sendStatus(400);
        console.log(err)
    })
}


module.exports=authController;