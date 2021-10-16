import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { CardsContainer, HomeContainer, HomeTopContainer, HomeBottomContainer, Text } from './styles';

import { PythonCard } from './components/PythonCard';
import { JavascriptCard } from './components/JavascriptCard';
import { MongoCard } from './components/MongoCard';
import { HomeCardRow } from './components/HomeCard';

import back1 from './back1.jpg'
import back2 from './back2.jpg'
import back3 from './back3.jpg'
import back4 from './back4.jpg'
import back5 from './back5.jpg'
import back6 from './back6.jpg'
import back7 from './back7.jpg'
import { Marginer } from './components/marginer';




function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomeContainer>
          <HomeTopContainer>
            <Text>Welcome to my portfolio</Text>
          </HomeTopContainer>
          <HomeBottomContainer>
            <Marginer direction="vertical" margin="5em" />
            <HomeCardRow sources={[back7, back5, back6, back4]} strokes={["#F8764F", "#F8764F", "#F8764F", "#F8764F"]} />
          </HomeBottomContainer>
          <HomeBottomContainer>
            <Marginer direction="vertical" margin="5em" />
            <HomeCardRow sources={[back7, back5, back4]} strokes={["#F8764F", "#F8764F", "#F8764F"]} />
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
