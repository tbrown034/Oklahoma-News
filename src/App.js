import './App.css';
import Headline from "./Components/Headline";
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
      
      <Header />
      <div className='topBanner'>
      <h1>Oklahoma News and Politics Portal</h1>
        
      </div>
      
      <Headline />
      
    </div>
  );
}

export default App;
