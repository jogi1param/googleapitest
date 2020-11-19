import './App.css';
import SearchResults from './components/SearchResults';
import SearchInput from './components/SearchInput';

function MainContainer() {
  return (
    <div className="App">
      <div>
        <SearchInput />
      </div>
      <div>
       <SearchResults />
      </div>
    </div>
  );
}

export default MainContainer;
