/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export const Home: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M22,9.45,12.85,3.26A1.52,1.52,0,0,0,12,3a1.49,1.49,0,0,0-.84.26L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h5V16h4v5h5a1,1,0,0,0,1-1V10.37l.94.63Z"
        className="active-item"
        style={{ fillOpacity: 1 }}
      />
      <path d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z" />
    </svg>
  );
};

export const Connections: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" />
    </svg>
  );
};

export const Jobs: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z" />
    </svg>
  );
};

export const Messages: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z" />
    </svg>
  );
};

export const Notifications: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M20.94,19L19,14.49s-0.41-3.06-.8-6.06A6.26,6.26,0,0,0,12,3h0A6.26,6.26,0,0,0,5.79,8.44L5,14.49,3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19ZM12,4.75h0a4.39,4.39,0,0,1,4.35,3.81c0.28,2.1.56,4.35,0.7,5.44H7L7.65,8.56A4.39,4.39,0,0,1,12,4.75ZM5.52,18l1.3-3H17.18l1.3,3h-13Z" />
    </svg>
  );
};

export const Work: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z" />
    </svg>
  );
};

export const PostJob: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="4" r="2" opacity=".7" />
      <path d="M21 10H3a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1V11a1 1 0 00-1-1zm-5 9H8v-2h8v2zm2-4H6v-2h12v2z" />
      <g opacity=".55">
        <path d="M9.57 5.75l-2.41 4.83 1.68.84 2.28-4.57a3 3 0 01-1.55-1.1zM14.43 5.75a3 3 0 01-1.55 1.1l2.28 4.57 1.68-.84z" opacity=".55" />
      </g>
    </svg>
  );
};

export const Save: React.FC = props => {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1zM5 12V3h6v9l-3-2z" />
    </svg>
  );
};

export const Groups: React.FC = props => {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M15.11 9.41l-1.74-1.16.41-.83a2 2 0 00.22-.89v-1a1.5 1.5 0 00-3 0v1a2 2 0 00.21.89l.41.83h-.07l-.21-.13L9 7v-.5l.33-.5A4 4 0 0010 3.79v-.68A2.07 2.07 0 008.34 1 2 2 0 006 3v.79A4 4 0 006.67 6l.33.5V7L4.66 8.17l-.21.13h-.07l.41-.83A2 2 0 005 6.53v-1a1.5 1.5 0 00-3 0v1a2 2 0 00.21.89l.42.83L.89 9.41A2 2 0 000 11.07V14a1 1 0 001 1h14a1 1 0 001-1v-2.93a2 2 0 00-.89-1.66zM3 10.73V13H2v-2.05l1-.69a3 3 0 000 .47zM11 13H5v-2.27a1 1 0 01.55-.89L8 8.61l2.45 1.22a1 1 0 01.55.89V13zm3 0h-1v-2.27-.48l1 .69V13z" />
    </svg>
  );
};

export const Write: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M17 13.75l2-2V20a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h8.25l-2 2H5v12h12v-5.25zm5-8a1 1 0 01-.29.74L13.15 15 7 17l2-6.15 8.55-8.55a1 1 0 011.41 0L21.71 5a1 1 0 01.29.71zm-4.07 1.83l-1.5-1.5-6.06 6.06 1.5 1.5zm1.84-1.84l-1.5-1.5-1.18 1.17 1.5 1.5z" />
    </svg>
  );
};

export const Photo: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21 6h-3l-1.5-3h-9L6 6H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V7a1 1 0 00-1-1zM7.36 8l1.5-3h6.28l1.5 3H20v2h-3.42a5 5 0 00-9.16 0H4V8h3.36zm7.76 4A3.13 3.13 0 1112 8.88 3.13 3.13 0 0115.13 12zM4 18v-7h3.1a5 5 0 109.8 0H20v7H4z" />
    </svg>
  );
};

export const Video: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21 5.92a1 1 0 00-.57.18L17 8.5V7a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1h13a1 1 0 001-1v-1.5l3.43 2.4a1 1 0 00.57.18 1 1 0 001-1V6.92a1 1 0 00-1-1zM15 16H4V8h11v8zm2-5.21l3-2.1v6.62l-3-2.1v-2.42z" />
    </svg>
  );
};

export const Document: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M14.13 2H5a1 1 0 00-1 1v18a1 1 0 001 1h14a1 1 0 001-1V7.88zM18 20H6V4h7v5h5v11zM8 12h8v1H8v-1zm0 3h6v1H8v-1z" />
    </svg>
  );
};

export const Article: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H4V6h16v12zm-7-7H6v5h7v-5zm-1 4H7v-3h5v3zm2-2h4v1h-4v-1zm0 2h4v1h-4v-1zm0-4h4v1h-4v-1zm4-1H6V8h12v2z" />
    </svg>
  );
};

export const Like: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M17.51 11l-2.15-3a14.81 14.81 0 01-2.25-5.29L12.74 1H10.5A2.5 2.5 0 008 3.5v.58a9 9 0 00.32 2.39L9 9H4.66A2.61 2.61 0 002 11.4a2.48 2.48 0 00.39 1.43 2.48 2.48 0 00.69 3.39 2.46 2.46 0 001.45 2.92 2.47 2.47 0 000 .36A2.5 2.5 0 007 22h4.52a8 8 0 001.94-.24l3-.76H21V11h-3.49zM19 19h-2.12l-3.41.82A6 6 0 0112 20H7a.9.9 0 01-.9-.89v-.14l.15-1-1-.4a.9.9 0 01-.55-.83.93.93 0 010-.22l.3-.95-.73-.57a.9.9 0 01-.39-.74.88.88 0 01.12-.44l.46-.72-.46-.72a.88.88 0 01-.14-.51 1 1 0 011-.87h6.64l-1.3-4.7a9 9 0 01-.33-2.37v-.55a.5.5 0 01.5-.5h.95a17.82 17.82 0 002.52 6.22L16.6 13H19v6z" />
    </svg>
  );
};

export const Comment: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M18 10H6V9h12v1zm4-5v17l-5-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1zm-2 1H4v10h13.7l2.3 1.84V6zm-4 6H8v1h8v-1z" />
    </svg>
  );
};

export const Share: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M24 12a1.18 1.18 0 00-.36-.84L14 2v6h-3A10 10 0 001 18v4h1.87A6.11 6.11 0 019 16h5v6l9.63-9.14A1.18 1.18 0 0024 12zm-8 5.54V14H9a8.15 8.15 0 00-6 2.84A8 8 0 0111 10h5V6.48L21.81 12z" />
    </svg>
  );
};

export const Send: React.FC = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19.27 4.73l-4.91 12.9-2.18-5.81-5.81-2.18 12.9-4.91m2-2.73a1 1 0 00-.28 0L1 9.65l9.71 3.64L14.35 23 22 3.05A.78.78 0 0021.23 2z" />
    </svg>
  );
};
