import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./components/Signin";
import Index from "./components/index";
import SignUp from "./components/Signup"

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;