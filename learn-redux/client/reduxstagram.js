import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('root'));
const item = () => {

  document.getElementById('root1').innerHTML = `
  <div>
    Hello HTML
    <input/>
    <pre>${(new Date).toLocaleTimeString()}</pre>
  </div>`;

render(
  React.createElement(
    'div',
    null,
    "hello react",
    React.createElement('input',null),
    React.createElement('pre',null,(new Date).toLocaleTimeString()),
  ),
    document.getElementById('root2')
)

}
setInterval(item,1000);
