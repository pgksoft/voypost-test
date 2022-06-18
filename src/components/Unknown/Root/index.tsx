import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from 'reactfire';
import AuthenticatedLayout from '../AuthenticatedLayout';
import GuestLayout from '../GuestLayout';
import HomeScreen from '../HomeScreen';
import NotFoundScreen from '../NotFoundScreen';
import SignInScreen from '../../Auth/SignInScreen';
import login, { listingFlats, home, register } from './const/links';
import SignUpScreen from '../../Auth/SignUpScreen';
import FlatsScreen from '../../FlatsScreen';

const Root: React.FC = () => {
  const {
    data: user,
    // hasEmitted,
    firstValuePromise,
  } = useUser();
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const isLogged = !!user;

  useEffect(() => {
    firstValuePromise.then(() => setIsUserLoaded(true));
  }, [firstValuePromise, setIsUserLoaded]);

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
          <Route exact path={listingFlats.url} component={FlatsScreen} />
          <Route
            exact
            path={login.url}
            component={() => <Redirect to={home.url} />}
          />
          <Route
            exact
            path={register.url}
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
        <Route exact path={register.url} component={SignUpScreen} />
        <Route path="*" component={() => <Redirect to={login.url} />} />
      </Switch>
    </GuestLayout>
  );
};

export default Root;
