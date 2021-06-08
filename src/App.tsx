import TodoPage from './Pages/ToDoPage'
import Show from './Pages/Show'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
