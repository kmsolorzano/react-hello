import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
let el = document.getElementById('root');
let root = ReactDOM.createRoot(el);
let num = 0;
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Home num={num} />
    </React.StrictMode>,
  )
  num += 1;
}, 1000);

