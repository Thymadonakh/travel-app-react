import './App.css';
import NavBar from './components/Navbar';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        {...item}
      />
    )
  })
  
  return (
    <div className="App">
      <NavBar />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
