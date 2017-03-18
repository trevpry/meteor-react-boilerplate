import React from 'react';

import PrivateHeader from './PrivateHeader';

export default Link = () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        Dashboard page content.
      </div>
    </div>
  );
};
