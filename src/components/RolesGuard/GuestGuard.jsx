import React, { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
// import { useAuth } from '../../hooks/index';
import { ROUTES } from '../../constants/routes';


export const GuestGuard = (props) => {
  // const { isAuthenticated } = useAuth();
  // console.log(isAuthenticated)

  // if (!isAuthenticated) {
  // }
  // return <Redirect to={ROUTES.HOME} />;

  return <>{props.children}</>;
};
