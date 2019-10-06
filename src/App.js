import React, { Fragment}from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './features/nav/NavBar/NavBar';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';
// import { Button } from 'semantic-ui-react';



function App() {
  return (
    <Fragment>
      <NavBar/>
      <Container className="main">
          <EventDashboard/>
      </Container>
    </Fragment>
  );
}

export default App;
