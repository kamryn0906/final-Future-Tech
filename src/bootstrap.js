import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducer from './reducers';

const store = createStore(reducer, compose(applyMiddleware(), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f 
));

import './style/main.scss';

import history from './history';

import Layout from './components/layout';
import Shop from './components/shop/shop';
import Review from './components/order/review';
import Shipping from './components/information/shipping';
import Payment from './components/information/payment';

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={Shop}/>
            <Route path='/shop' exact component={Shop}/>
            
            <Route path='/order/review' exact component={Review}/>

            <Route path='/information/shipping' exact component={Shipping}/>
            <Route path='/information/payment' exact component={Payment}/>
          </Switch>
        </Layout>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
