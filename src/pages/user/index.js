import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const UserIndexPage = () => {
  return (
    <div>
      This is the index section
    </div>
  );
};

export default withAuthenticationRequired(UserIndexPage);
