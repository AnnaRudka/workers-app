import { createGlobalStyle } from 'styled-components';
import './App.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import EmployeesList from './components/EmployeesList';
import EmployeesBirthday from './components/EmployeesBirthday';
import { Wrapper } from './styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUsers } from './redux/usersSlice';

const Global = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: sans-serif;
  }
  a{
    text-decoration:none;
  }
`;

function App() {
  const dispatch = useDispatch();

  async function getUsers() {
    const apiUrl =
      'https://yalantis-react-school-api.yalantis.com/api/task0/users';
    await axios
      .get(apiUrl)
      .then(resp => {
        const data = resp.data;
        data.map(user => dispatch(setUsers(user)));
      })
      .catch(error => {
        console.log(error);
      });
  }
  getUsers();

  return (
    <div className="App">
      <Global />
      <Router>
        <Route path="/employees">
          <Wrapper>
            <EmployeesList />
            <EmployeesBirthday />
          </Wrapper>
        </Route>
      </Router>
    </div>
  );
}

export default App;
