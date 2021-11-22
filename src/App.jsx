// Router dom utilidades
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Page home
import { Home } from "../src/pages/Home";



function App() {
  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Home} />

      </Switch>

    </BrowserRouter>

  );
}

export default App;