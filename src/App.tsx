import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import  AddMeal from './pages/AddMeal';
import SingUp from './pages/SingUp';
import Users from './pages/Users';
import addActivity from './pages/addActivity';
import { AuthProvider } from '../src/context/Auth'

import './scss/variables.scss';
import './scss/style.scss';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/users/add" component={SingUp} />

          <Route path="/add-meal" component={AddMeal} exact />
          <Route path="/add-activity" component={addActivity} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
