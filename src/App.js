import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  });
  return (
    <div className='App'>
      <div>my app</div>
    </div>
  );
}

export default App;
