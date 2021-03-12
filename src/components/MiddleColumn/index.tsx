import React from 'react';

import LoadingFeedShare from '../Shimmer/LoadingFeedShare';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';
import FeedShare from './FeedShare';
import FeedPost from './FeedPost';
import { LoadingProps } from "../../types/";
import { Container, DownIcon } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <div className="seprator">
            <div className="line" />
            <span data-tip="Sort posts">
              Sort by:<strong> Top</strong>
            </span>
            <DownIcon />
          </div>
          <FeedPost avatar="https://github.com/bbayo4.png" user="Buba Bayo" title="Frontend Developer at DXC" />
          <FeedPost avatar="https://github.com/bijib06.png" user="Buba Bojang" title="Solution Architecture" />
          <FeedPost
            avatar="https://github.com/Bconteh.png"
            user="Buba Conteh"
            title="Software Engineer - DevOps"
          />
          <FeedPost
            avatar="https://github.com/mjatta.png"
            user="Muhammed Jatta"
            title="Software Engineer - Frontend"
          />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
