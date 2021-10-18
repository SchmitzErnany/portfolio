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
import back8 from './back8.jpg'
import back9 from './back9.jpg'
import back10 from './back10.jpg'
import back11 from './back11.jpg'
import back12 from './back12.jpg'
import back13 from './back13.jpg'
import back14 from './back14.jpg'
import back15 from './back15.jpg'
import back16 from './back16.jpg'
import back17 from './back17.jpg'
import back18 from './back18.jpg'
import back19 from './back19.jpg'
import back20 from './back20.jpg'
import backzao from './backzao.jpg'
import backzao_crop from './backzao_crop.jpg'
import { Marginer } from './components/marginer';




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
            <HomeCardRow flexes={[0.5, 0.5, 0.5, 1]} sources={[back11, back8, back19, back18]} texts={["Prior knowledge", "Computer languages", "Tools", "Projects"]} subtexts={["sub1", "sub2", "sub3", "sub4"]} />
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
