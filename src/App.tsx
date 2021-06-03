import { TodoPage } from './Pages/ToDoPage'
import Show from './Pages/Show'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <TodoPage />
          </Route>
          <Route exact path="/:id">
            <Show />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
