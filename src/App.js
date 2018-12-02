import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout';
import Authentication from './components/authentication';
import MobileVerify from './containers/auth/mobile_verify';
import Dashboard from './containers/dashboard';
import CreateBlog from './containers/blog/create';
import UpdateBlog from './containers/blog/update';
import ListBlog from './containers/blog/list';
import ViewBlog from './components/blog/view';

const App = () => {
  return (
    <Switch>
      <Route exact path='/login' component={MobileVerify} />
      <Layout>
        <Authentication>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/blogs' component={ListBlog} />
          <Route exact path='/blogs/:id/update' component={UpdateBlog} />
          <Route exact path='/blogs/:id/view' component={ViewBlog} />
          <Route exact path='/blogs/new' component={CreateBlog} />
        </Authentication>
      </Layout>
    </Switch>
  );
}

export default App;
