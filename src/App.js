import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {


  //pull anything from datalayer
  const [{ user, token }, dispach] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispach({
        type: "SET_TOKEN",
        token: _token,
      })


      //help to connect spotify api and react
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //throwing data
        dispach({
          type: "SET_USER",
          user: user,

        }) 
      });

      spotify.getUserPlaylists().then((playlists) =>{ 

        dispach({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      });

      spotify.getPlaylist('37i9dQZEVXcJBcRlsmBb2p').then(response => {
        dispach({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly : response,
        })
      })
    }

    console.log('i have a token>>', token)
  }, []);

  // console.log('hello chitvan 👳🏻‍♀️', user);
  // console.log('hello token 🃏', token);


  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
          // <h1>I Am logged in</h1>
        ) : (
            <Login />
          )
      }

    </div>
  );
}

export default App;
