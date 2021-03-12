import React from 'react';

import { HomeButton, ConnectionButton, MessagingButton, NotificationsButton, ProfileButton, GroupButton, SearchButton } from '../HeaderButtons';
import LogoutButton from '../HeaderButtons/LogoutButton';
import { Container, Wrapper, LinkedInIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon onClick={() => window.location.href = '/'} />
          <SearchButton />
        </div>

        <div className="right">
          <nav>
            <HomeButton />
            <ConnectionButton />
            <GroupButton />
            <MessagingButton />
            <NotificationsButton />
            <div className="line" />
            <ProfileButton />
            <LogoutButton />
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
