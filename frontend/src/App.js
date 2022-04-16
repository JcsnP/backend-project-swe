import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import CreateProducts from './pages/CreateProducts';
import UpdateProducts from './pages/UpdateProducts';
import ProductDetails from './pages/ProductDetails';
import Menu from './components/Menu';
// import 'bootstrap/dist/css/bootstrap.min.css';
// <Route path="/product-details" component={ProductDetails} />
class App extends React.Component {

  render() {
    return (
      <Router >
        <Header />
        <Switch>
          <Route path="/update-products/:p_id" component={UpdateProducts} />
          <Route path="/create-products">
            <CreateProducts />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
        <Footer />
      </Router>

    )
  }

}

export default App;