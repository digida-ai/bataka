import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Assume you have an AuthContext

const withRoleAccess = (allowedRoles) => (WrappedComponent) => {
  return (props) => {
    const { user } = useAuth();

    if (allowedRoles.includes(user.role)) {
      return <WrappedComponent {...props} />;
    } else {
      return <div>Access Denied</div>;
    }
  };
};

export default withRoleAccess;
