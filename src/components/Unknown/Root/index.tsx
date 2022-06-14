import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useUser } from 'reactfire';
import AuthenticatedLayout from '../AuthenticatedLayout';
import GuestLayout from '../GuestLayout';
import HomeScreen from '../HomeScreen';
import NotFoundScreen from '../NotFoundScreen';
import SignInScreen from '../../Auth/SignInScreen';
import login, { home } from './const/links';

const Root: React.FC = () => {
  const {
    data: user,
    // hasEmitted,
    firstValuePromise,
  } = useUser();
  const history = useHistory();
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const isLogged = !!user;

  useEffect(() => {
    firstValuePromise.then(() => setIsUserLoaded(true));
  }, [firstValuePromise, setIsUserLoaded]);

  useEffect(() => {
    if (!isLogged) {
      history.push(login.url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  // doesn't always work, but suddenly works when subscribing to `firstValuePromise`
  // thus we use `isUserLoaded` below
  // if (!hasEmitted) {
  //   return null;
  // }
  if (!isUserLoaded) {
    return null;
  }

  if (isLogged) {
    return (
      <AuthenticatedLayout>
        <Switch>
          <Route exact path={home.url} component={HomeScreen} />
          <Route
            exact
            path={login.url}
            component={() => <Redirect to={home.url} />}
          />
          <Route path="*" component={NotFoundScreen} />
        </Switch>
      </AuthenticatedLayout>
    );
  }

  return (
    <GuestLayout>
      <Switch>
        <Route exact path={login.url} component={SignInScreen} />
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </GuestLayout>
  );
};

export default Root;
