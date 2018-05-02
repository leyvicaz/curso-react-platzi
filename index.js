import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../'
// import Playlist from './src/playlist/components/playlist';

import data from './src/api.json';

const container = document.getElementById('app');
const holaMundo = <h1>Hola mundo¿¡--</h1>;

//ReactDOM.render(que voy a renderizar, donde)
ReactDOM.render(<Playlist data={data}/>,app)