import logo from './logo.svg';
import './App.css';

import TodosContainer from '../src/components/container/TodoContainer.jsx'
import TodoFormContainer from './components/container/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer/>
        <TodoFormContainer/>
        <FilterOptions/> 
      </header>
    </div>
  );
}

export default App;
