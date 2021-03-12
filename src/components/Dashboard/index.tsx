import React, { useState, useEffect } from 'react';

import LeftColumn from '../../components/LeftColumn';
import MiddleColumn from '../../components/MiddleColumn';
import RightColumn from '../../components/RightColumn';

const Dashboard: React.FC = (): JSX.Element => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <LeftColumn isLoading={isLoading} />
      <MiddleColumn isLoading={isLoading} />
      <RightColumn isLoading={isLoading} />
    </>
    
  );
};

export default Dashboard;
