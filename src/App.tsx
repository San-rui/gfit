import { Login, Dashboard, SingUp, Users } from "./pages";
import { CustomizedTables } from '../src/components'
import './style.scss'

function App() {

  return (
    <div className="App">
      <Users />
      <CustomizedTables/>

    </div>
  );
}

export default App;
