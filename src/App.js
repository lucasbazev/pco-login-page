import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Planning Center</h1>
      
      <div className='form'>
        <input placeholder='Your Email or Phone'/>
        <input placeholder='Password'/>
        <button>Log In</button>
        <a href='/'>Need a password?</a>
      </div>
    </div>
  );
}

export default App;
