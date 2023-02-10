
import './App.css';
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import EditForm from './components/EditForm';
function App() {

  return (
    <>
      <BrowserRouter>
        <Route exact path="/" render={()=><Main/>}/>
        <Route exact path="/:_id" render={ routeProps => <Detail {...routeProps} />} />
        <Route exact path="/:_id/edit" render={ routeProps => <EditForm {...routeProps} />} />
      </BrowserRouter>
    </>
  );
}

export default App;
