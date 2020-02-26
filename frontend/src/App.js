import React, { Fragment } from 'react';
/* ROUTING */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Layouts */
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
/* Components */
import Home from './components/home/Home';
import Matriz from './components/matriz/Matriz';
import Users from './components/users/Users';
import NewUser from './components/users/NewUser';
import EditUser from './components/users/EditUser';
import Controls from './components/controls/Controls';
import History from './components/history/History';
import Preview from './components/preview/Preview';
import Vobo from './components/vobo/Vobos';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />

        <div className="grid contenedor contenido-principal">
          <Navigation />

          <main className="caja-contenido w-100 ">
            {/* col-9 */}
            <Switch>
              <Route exact path="/home" component={Home} />

              <Route exact path="/matriz" component={Matriz} />

              <Route exact path="/users" component={Users} />
              <Route exact path="/users/new" component ={NewUser}/>
              <Route exact path="/users/edit/:id" component ={EditUser}/>

              <Route exact path="/controls" component={Controls} />

              <Route exact path="/history" component={History} />

              <Route exact path="/preview" component={Preview} />

              <Route exact path="/vobo" component={Vobo} />
            </Switch>
          </main>
        </div>
        <div className="contenedor position-absolute">
          <Footer />
        </div>
      </Fragment>
    </Router>
  );
}
export default App;

