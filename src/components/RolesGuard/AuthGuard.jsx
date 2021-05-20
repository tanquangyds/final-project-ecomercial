import React, { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
// import { useAuth } from '../../hooks/index';
import { ROUTES } from '../../constants/routes';


export const AuthGuard = (props) => {
  // const { isAuthenticated } = useAuth();
  // console.log('AAA', !isAuthenticated)

  // if (!isAuthenticated) {
  //   return <Redirect to={ROUTES.LOGIN} />;
  // }

  return <>{props.children}</>;
};
