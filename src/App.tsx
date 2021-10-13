import { Login, Dashboard, SingUp, Users, Profile } from "./pages";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/variables.scss';
import './scss/style.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login} />
          <Route path="/users/add" component={SingUp} />
          <Route path="/users" component={Users} exact />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
