import React from 'react' ;
import Home from './Components/Home';
import { Redirect, Route , Switch } from 'react-router';
import Ser from './Pages/Ser';
import Cont from './Pages/Cont';
import Hea from './Pages/Hea';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/service" component={Ser} />
        <Route  path="/about" component={Hea} />
        <Route  path="/contact" component={Cont} />
        <Redirect path="/" />
      </Switch>
      
    </>
  )
}

export default App ;
