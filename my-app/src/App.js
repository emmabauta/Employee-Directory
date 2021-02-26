import './App.css';
import Header from './components/Header';
import SearchName from './components/Search';
import Wrapper from './components/Wrapper';
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header/> 
        <SearchName/> 
      </Wrapper>

    </div>
  );
}

export default App;
