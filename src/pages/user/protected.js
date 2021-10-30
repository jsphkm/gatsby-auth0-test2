import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedPage = () => {
  return (
    <div>
      Protected Page
    </div>
  );
};

export default withAuthenticationRequired(ProtectedPage);
