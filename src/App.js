import React from 'react';
import ContextState from './context_state_config';
import history from './utils/history';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-144556525-1');

history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

const App = () => {

    return(
      <div>
      React
      <ContextState />
      </div>
    )
}


export default App;
