import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css'; //import cssnya
import App from './App';
import { appendFile } from 'fs';
import * as serviceWorker from './serviceWorker';

//const items = ['Merah','Kuning','Hijau','Biru'];

const items = [
  {
    name : "Summer",
    color : 'Merah',
    img :'Panas.jpg'
  },
  {
    name : "Auntum",
    color : 'Kuning',
    img :'Gugur.jpg'
  },
  {
    name : "Spring",
    color : 'Hijau',
    img :'Semi.jpg'
  }, 
  {
    name : "Winter",
    color : 'Biru',
    img :'Salju.jpg'
  },
  {
    name : "Calculator",
    color : 'Grey',
    img :''
  },
  {
    name : "Profile",
    color : 'Black',
    img :''
  },
  {
    name : "Random User",
    color : 'Purple',
    img :''
  },
];

ReactDOM.render(<App items={items}/>,
  document.getElementById('root')
);

serviceWorker.register();
