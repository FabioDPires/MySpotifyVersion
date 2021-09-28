var express=require('express');
const cors= require('cors')
const parser=require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node');
var authController=require("./controllers/authController");
var app=express();
app.use(cors());
app.use(parser.json())

app.post("/login", (req,res) => {
    const code=req.body.code;
    console.log("CHEGUEI AQUI")

    const spotifyAPI=new SpotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId:'0372f92e946c4259a6ca98ac22351161',
        clientSecret:'e15462f8885a4f9e92e88e99b2b67364'
    })

    spotifyAPI.authorizationCodeGrant(code).then((data)=>{
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
});

app.post("/refresh",(req,res) => {
    console.log("hi")
    const refreshToken=req.body.refreshToken
    console.log("HABIBI ALSDASDDA")
    const spotifyAPI=new SpotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId:'0372f92e946c4259a6ca98ac22351161',
        clientSecret:'e15462f8885a4f9e92e88e99b2b67364',
        refreshToken
    })

    spotifyAPI.refreshAccessToken().then(
        (data)=> {
           res.json({
               accessToken:data.body.accessToken,
               expiresIn:data.body.expiresIn
           })
        }
    ).catch((err)=> {
        console.log(err)
        res.sendStatus(400)
    }

    )
})

app.listen(3001);
