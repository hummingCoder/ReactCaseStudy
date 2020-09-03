import React from 'react';
import './App.less';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import {Layout} from "antd";
import * as ROUTES from './constants/routes';
import Main from "./containers/Main";

function App() {
  return (
      <Router>
          <Layout style={{minHeight: window.innerHeight}}>
              <Header/>
              <Switch>
                  <Route exact component={Main} path={ROUTES.MAIN}/>
              </Switch>
              <Footer/>
          </Layout>
      </Router>
  );
}

export default App;
