import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { StudentList } from './components/StudentList';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './components/Home';
import { AddStudent } from './components/AddStudent';
import { EditStudent } from './components/EditStudent';

function App() {
return (

    <GlobalProvider>
      <div className="App">
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/add" component={AddStudent} exact />
              <Route path="/edit/:id" component={EditStudent} exact />
          </Switch>
      </div>
    </GlobalProvider>

  );
}

export default App;
