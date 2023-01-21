import logo from './logo.svg';
import './App.css';
import Title from './components/MovieList';
import MovieCard from './components/MovieCard';
import Index from './components/index';



function App() {
  return (
    <div>
      <Title/>
      <MovieCard/>
      <Index/>
    </div>
  );
}

export default App;
