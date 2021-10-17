import BackgroundDef from 'react-hexagon/lib/BackgroundDef';
import styled from 'styled-components';

import backzao from './backzao.jpg'
import backzao2 from './backzao2.jpg'

export const CardsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: auto;
  background-image: url(${backzao});
  background-size: cover;
  position: relative;
  background-position: center;
`;

// REMOVED justify-content: center; FROM ABOVE

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  // background-color: #42216a;
  background-image: url(${backzao2});
  background-size: cover;
  position: relative;
  background-position: center;

  // background-image: url(${backzao});
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
`;

export const HomeTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 4em 15px;
`;

export const HomeBottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 3;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1em;
`;

export const Text = styled.h1`
  color: #FFBF8B;
  text-transform: uppercase;
  font-size: 4em;
  font-family: sans-serif, helvetica, arial;
  font-weight: 900;
`;