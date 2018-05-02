import React from 'react';

import ReactDOM from 'react-dom';

import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';

import data from '../api.json';

const container = document.getElementById('app');
const holaMundo = <h1>Hola mundo¿¡--</h1>;

//ReactDOM.render(que voy a renderizar, donde)
ReactDOM.render(<Home data={data} />,app)