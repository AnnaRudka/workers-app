import { createGlobalStyle } from "styled-components";
import "./App.css";
import { Route, HashRouter as Router } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import EmployeesBirthday from "./components/EmployeesBirthday";
import { Wrapper } from "./styles";

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
