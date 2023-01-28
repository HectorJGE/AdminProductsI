
import './App.css';
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';

function App() {

  return (
    <>
      <BrowserRouter>
        <Route exact path="/" render={()=><Main/>}/>
        <Route exact path="/:_id" render={ routeProps => <Detail {...routeProps} />} />
      </BrowserRouter>
    </>
  );
}

export default App;
