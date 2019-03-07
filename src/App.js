import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import Projectdetails from './component/project/ProjectDetails'
import SignIn from './component/auth/SingIn'
import SignUp from './component/auth/SingUp'
import CreateProject from './component/project/CreateProject';
import Footer from './component/layout/footer'
class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={Projectdetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/addpost" component={CreateProject} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
