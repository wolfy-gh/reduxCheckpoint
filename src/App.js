import './App.css';
import List from './components/TodoList'
import Add from './components/Add'
import Filter from './components/Filter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>ToDo APP</h1>
      <div className="header">
        <Add />
        <Filter />
      </div>
      <List />
    </div>
  );
}

export default App;
