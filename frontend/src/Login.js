import React from 'react';
import {Container} from 'react-bootstrap';
import './CSS/login.css'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=0372f92e946c4259a6ca98ac22351161&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container className="loginButton">
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  )
}

 