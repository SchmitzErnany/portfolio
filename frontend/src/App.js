import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { CardsContainer, HomeContainer, HomeTopContainer, HomeBottomContainer, Text } from './styles';

import { PythonCard } from './components/PythonCard';
import { JavascriptCard } from './components/JavascriptCard';
import { MongoCard } from './components/MongoCard';
import { HomeCardRow } from './components/HomeCard';

import backzao from './backzao.jpg'
import backzao_crop from './backzao_crop.jpg'
import { Marginer } from './components/marginer';

import { items } from './components/HomeCard/data';




function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomeContainer>
          <HomeTopContainer>
            <Text>Welcome to ers's portfolio</Text>
          </HomeTopContainer>
          <HomeBottomContainer>
            <Marginer direction="vertical" margin="5em" />
            <HomeCardRow cardsFeatures={items} />
          </HomeBottomContainer>
        </HomeContainer>
        <CardsContainer>
          <PythonCard /><JavascriptCard /><MongoCard />
          <GlobalStyle />
        </CardsContainer>
      </Route>
    </BrowserRouter>
  );
}

export default App;
