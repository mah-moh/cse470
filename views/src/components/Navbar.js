import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {copy} from 'react-copy-to-clipboard';
import { v4 as uuidv4 } from 'uuid';

function Nav() {

  const url = uuidv4();

  const [link, setLink] = useState();

  const [user, setUser] = useState([]);

  const [copied, setCopied] = useState(false);

  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();


  const copyToClipboard = () => {
    copy(user._id);
    alert(`You have copied "${user.id}"`);
  }

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userId'));
    if (item) {
        fetch('http://localhost:9000/user/getuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: item }),
      })
      .then(res => res.json())
      .then(resultData => {
        setUser(resultData)
      })
      .catch(err => console.log(err))
    }
  }, []);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userId'));
    if (item) {
        fetch(`http://localhost:9000/user/${item}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url }),
      })
      .then(res => res.json())
      .then(resultData => {
        setUser(resultData)
      })
      .catch(err => console.log(err))
    }
  }, []);

  useEffect(() => {
    if(redirect) {
      navigate('/signin')
    }
  }, [redirect]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setRedirect(true);
  }



  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand >Signed in as: {user.firstname}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <input type="text" value="http://{" readOnly />
          <Button onClick={copyToClipboard} >Copy link</Button>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleLogout} variant="outline-info">Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;