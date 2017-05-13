import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { Products, ProductDetails, Home, Nav } from './components';
import { Admin } from './components/admin';
import './styles/index.scss';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router>
      <div>
        <Nav />
        <div className="main">
          <div className="container">
            <Switch>
              <Route path="/admin" component={Admin} />
              <Route path="/products/:id/:name?" component={ProductDetails} />
              <Route path="/products" component={Products} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);