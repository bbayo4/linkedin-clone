import React, { useState } from 'react';
import openPage from '../../utils/openPage';

import {
  Container,
  HomeIcon,
  ConnectionIcon,
  GroupIcon,
  CaretDownIcon,
  MessagesIcon,
  NotificationsIcon,
  ProfileCircle,
  SearchForm,
  SearchIcon,
  SearchInput,
} from './styles';

export const HomeButton: React.FC = () => {
  return (
    <Container id="home-button">
      <button type="button" className="active" onClick={() => window.location.reload()} data-tip="Go to the feed">
        <HomeIcon />
        <span>Home</span>
      </button>
    </Container>
  );
};


export const ConnectionButton: React.FC = () => {
  return (
    <Container id="connection-button">
      <button type="button" onClick={() => openPage('mynetwork')} data-tip="Go to your connections">
        <ConnectionIcon />
        <span>Connections</span>
      </button>
    </Container>
  );
};

export const MessagingButton: React.FC = () => {
  return (
    <Container id="messages-button">
      <button type="button" onClick={() => openPage('messaging')} data-tip="Go to your messages">
        <MessagesIcon />
        <span>Messaging</span>
      </button>
    </Container>
  );
};

export const NotificationsButton: React.FC = () => {
  return (
    <Container id="notifications-button">
      <button type="button" onClick={() => openPage('notifications')} data-tip="Go to your notifications">
        <NotificationsIcon />
        <span>
          Notifications
        </span>
      </button>
    </Container>
  );
};

export const ProfileButton: React.FC = () => {
  return (
    <Container>
      <button type="button" onClick={() => openPage('in/')} data-tip="Go to your profile">
        <ProfileCircle src="https://github.com/bbayo4.png" />
        <span>
          Me
          <CaretDownIcon />
        </span>
      </button>
    </Container>
  );
};

export const GroupButton: React.FC = () => {
  return (
    <Container id="work-button">
      <button type="button" onClick={() => openPage('groups')} data-tip="Go to groups">
        <GroupIcon />
        <span>
          Groups
          
        </span>
      </button>
    </Container>
  );
};

export const SearchButton: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        if (search) openPage(`search/results/all/?keywords=${encodeURI(search)}`);
      }}
    >
      <SearchInput placeholder="Search" onChange={e => setSearch(e.target.value.trim())} data-tip="Search something on LinkedIn" />
      <SearchIcon
        data-tip={`Search ${search} on LinkedIn`}
        onClick={() => {
          if (search) openPage(`search/results/all/?keywords=${encodeURI(search)}`);
        }}
      />
    </SearchForm>
  );
};