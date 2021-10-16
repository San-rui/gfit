import { SingUp, Users, Profile, AddTask } from "./pages";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useAuth } from "./hooks";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


import './scss/variables.scss';
import './scss/style.scss';


function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/users/add" component={SingUp} />

          <Route path="/add-task" component={AddTask} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
