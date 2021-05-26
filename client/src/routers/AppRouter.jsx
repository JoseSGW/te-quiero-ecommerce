import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { startLoadingOrdersByUser } from '../actions/orders';
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from './AdminRoutes';
import StoreRoutes from './StoreRoutes';
import AuthRoutes from './AuthRoutes';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Components/Loading/Loading';
import { types } from '../types/types';

const AppRouter = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.users);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [verify, setVerify] = useState(true);

  useEffect(() => {
    if(user.name && user.admin) {
      dispatch(startLoadingOrdersByUser(user.id));
      setIsLoggedIn(true);
      setIsAdmin(false);
      dispatch({ type: types.isLoggedTrue })
      dispatch({ type: types.isAdminTrue })
      setVerify(false);
    } else if(user.name && !user.admin) {
      dispatch(startLoadingOrdersByUser(user.id));
      setIsLoggedIn(true);
      setIsAdmin(true);
      dispatch({ type: types.isLoggedTrue })
      dispatch({ type: types.isAdminFalse })
      setVerify(false);
    } else {
      setIsLoggedIn(false);
      setIsAdmin(true);
      dispatch({ type: types.isLoggedFalse })
      dispatch({ type: types.isAdminFalse })
      setVerify(false);
    }
  }, [user]);

  if(verify) return <Loading />;


  return (
    <Router>
      <div>
        <ReactNotification />
        <Switch>
          <PrivateRoute 
            path='/auth' 
            component={AuthRoutes} 
            isAuthenticated={isLoggedIn} 
          />
          <PrivateRoute
            path='/admin' 
            component={AdminRoutes} 
            isAuthenticated={isAdmin} 
          />
          <Route 
            path='/' 
            component={StoreRoutes} 
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
