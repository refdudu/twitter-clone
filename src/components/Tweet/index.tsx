import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar/>
        <Content>
          <Header>
            <strong>renan</strong>
            <span>@renan_fischer_</span>
            <Dot />
            <time>17 de nov</time>
          </Header>
          <Description>
            <a href="/">#NewProfilePicture</a>
          </Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              11
            </Status>
            <Status>
              <RetweetIcon />1
            </Status>
            <Status>
              <LikeIcon />
              78
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
