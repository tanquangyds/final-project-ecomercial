import React, { PropsWithChildren, Suspense } from 'react';

// loading
const loading = () => <div className="text-center" />;

const AuthLayout = (props) => {
  return <Suspense fallback={loading()}>{props.children}</Suspense>;
};

export default AuthLayout;
