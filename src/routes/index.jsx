import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouterWrapper';

import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Portfolio from '../pages/Portfolio';
import CommentList from '../pages/CommentList';
import ContactList from '../pages/ContactList';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route
          path="/dashboard/commentList"
          isPrivate
          exact
          component={CommentList}
        />
        <Route
          path="/dashboard/contactList"
          isPrivate
          exact
          component={ContactList}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
