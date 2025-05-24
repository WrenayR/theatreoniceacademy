import './App.css';
import SignUpForm from './components/signupform/formsignup';

function App() {
  return (
    <div className="App">
      <div className='header'>Theatre On Ice Academy</div>
      <div className='sign-up-form'>{SignUpForm()}</div>
    </div>
  );
}

export default App;
