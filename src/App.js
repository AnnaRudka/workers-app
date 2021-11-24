import { createGlobalStyle } from 'styled-components';
import { Route, HashRouter as Router } from 'react-router-dom';
import EmployeesList from './components/EmployeesList';
import EmployeesBirthday from './components/EmployeesBirthday';
import { Wrapper } from './styles';
import { useDispatch } from 'react-redux';
import { setUsers } from './redux/usersSlice';
import { getUsers } from './services/usersApi.js';

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

  getUsers().then(data => {
    data.map(user => dispatch(setUsers(user)));
  });

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
