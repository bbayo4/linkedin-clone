import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import DesktopHeader from '../DesktopHeader';
import AdBanner from '../AdBanner';

import { Container } from './styles';

const LayoutAuthenticated: React.FC<{}> = (props) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        {props.children}
      </main>
      <ReactTooltip place="bottom" type="dark" effect="solid" />
    </Container>
  );
};

export default LayoutAuthenticated;
