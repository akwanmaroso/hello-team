import './App.css';
import Books from './components/class_component/books';
import Counter from './components/class_component/counter';
import ListBooks from './components/class_component/list-books';
import CounterFC from './components/functional_component/counter';
import ListBooksFunction from './components/functional_component/list-books';
function App() {
  return (
    <div className="App">
      {/* Class Component */}
      {/* <ListBooks/> */}
      {/* Functional Component */}
      {/* <ListBooksFunction /> */}
      {/* <Counter /> */}
      <CounterFC />
    </div>
  );
}

export default App;
