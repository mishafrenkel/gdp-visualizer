import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
 
import Graph from './components/Graph'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Graph}/>
      </div>
     </BrowserRouter>
  );
}

export default App;
