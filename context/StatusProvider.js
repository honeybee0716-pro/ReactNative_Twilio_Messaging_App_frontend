import React, { useState } from 'react';
import StatusContext from './StatusContext';

const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;