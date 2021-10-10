

import GlobalStyle from './styles/global';
import { Container } from './styles';

import { PythonCard } from './components/PythonCard';
import { JavascriptCard } from './components/JavascriptCard';
import { MongoCard } from './components/MongoCard';



function App() {
  return (
    <>
      <Container>
        <PythonCard />
      </Container>
      <Container>
        <JavascriptCard />
      </Container>
      <Container>
        <MongoCard />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
