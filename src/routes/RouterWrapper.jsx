import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const user = useSelector((state) => state.login);
  let signed = false;

  if (user) {
    signed = true;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
