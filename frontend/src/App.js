

import GlobalStyle from './styles/global';
import { Container } from './styles';

import { PythonCard } from './components/PythonCard';
import { JavascriptCard } from './components/JavascriptCard';
import { MongoCard } from './components/MongoCard';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pageNotFound from './pageNotFound';



function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Container>
          <PythonCard />
        </Container>
      </Route>
      <Route exact path="/">
        <Container>
          <JavascriptCard />
        </Container>
      </Route>
      <Route exact path="/skills">
        <Container>
          <MongoCard />
        </Container>
      </Route>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
