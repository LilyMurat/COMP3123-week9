import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - 1</h1>
        <h2>React JS Programming Week09 Lab Exercise</h2>
        <Student studentId='101255734' fullName='Lale Mulati' />
        <h5>George Brown College, Toronto</h5>
      </header>
   </div>    
  );
}
export default App;