import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Gordinho do Gol"
                nickname="@_EricWeimer"
              />,
              <FollowSuggestion name="Christian" nickname="@chris_TPG" />,
              <FollowSuggestion name="Tiago '')" nickname="@tiago_coletinho" />,
              <FollowSuggestion name="júlia" nickname="@Juliaa_kuhn" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
