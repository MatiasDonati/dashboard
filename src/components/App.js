import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ContentRowMovies from './ContentRowMovies'
import ApiTest from './ApiTest';
import Api from './Api'


function App() {
  return (
    <React.Fragment>
          {/* <h1>Api</h1>
          <Api />
          <h1>ApiTest</h1>
          <ApiTest /> */}
          <ContentRowMovies />
      	<div id="wrapper">
          {/* <SideBar /> */}
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
