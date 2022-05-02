import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  console.log('Sivam')
  return (
    <div className="app">
        <Router>
           <Switch>
             <Route path='/search'>
               { /* <SeacrhPage /> */} 
                <h1>This is the Search Page</h1>
              </Route>
             <Route path='/'>
                <Home />
              </Route>
          </Switch>
    </Router>
       
    </div>
  );
}

export default App;
