import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthFooter from '../Components/AuthFooter/AuthFooter';
import AuthHeader from '../Components/AuthHeader/AuthHeader';
import LoginScreen from '../Pages/Auth/LoginScreen/LoginScreen';
import RecoverScreen from '../Pages/Auth/RecoverScreen/RecoverScreen';
import RegisterScreen from '../Pages/Auth/RegisterScreen/RegisterScreen';

const AuthRoutes = () => {
  return (
    <>
    <AuthHeader/>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />
        <Route exact path="/auth/password-recover" component={RecoverScreen} />
        <Redirect to='/auth/login' />
      </Switch>
      <AuthFooter/>
    </>
  )
}

export default AuthRoutes;
