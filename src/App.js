import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar.component';
// import InformationList from './components/information-list.component';
// import EditInformation from './components/edit-information.component';
// import addInformation from './components/add-information.component';
import UserRegistration from './components/user-registration.component';
import DomesticViolenceData from './components/domestic-violence-data.component';
import Members from './components/members.component';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        {/* <Route path="/" exact component={InformationList} />
    <Route path="/edit/:id" component={EditInformation} />
        <Route path="/add" component={addInformation} /> */}
        <Route path="/members" component={Members} />
        <Route path="/users" component={UserRegistration} />
        <Route
          path="/domestic-violence-data"
          component={DomesticViolenceData}
        />
      </div>
    </Router>
  );
}

export default App;
