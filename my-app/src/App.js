import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import SearchForm from './components/Search';
import DataTable from './components/DataTable';
function App() {
  return (
    <div className="App">
        <Header/> 
        <SearchForm/> 
        <Wrapper>
          <DataTable/>
        </Wrapper>
    </div>
  );
}

export default App;
