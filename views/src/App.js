import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup"
import Canvas from './components/Canvas';
import Board from './components/board';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="join/:id" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;