import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/usersSlice';
import { Section } from '../styles';
import ListItem from "./ListItem";
import axios from "axios";


const EmployeesList = () => {
  const letterList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const [users, setUsers] = useState([]);
  
  const activeUsers= useSelector(selectUsers);

  async function getUsers() {
    const apiUrl = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';
    await axios
      .get(apiUrl)
      .then(resp => {
        const data = resp.data;
        //data.sort((a, b) => a.firstname !== b.firstname ? a.firstname < b.firstname ? -1 : 1 : 0);
        const users = data.sort((a,b) => (a.firstname  - b.firstname)).reduce((acc, user) => {
          const letter = user.firstName[0];
          if (acc[letter]) {
            acc[letter].push(user);
          } else {
            acc[letter] = [user];
          }
          return acc;
        }, {});
        setUsers(users);
      })
      .catch(error => {
        console.log(error);
      });
  };
  getUsers(); 

  return (
    <Section>
      <h1 className="section-header">Employees</h1>
      <div className="section-content">
      {letterList.map((letter, index) =>
        users.hasOwnProperty(letter) ? (
          <div key={index} className="letter-card">
            <h2>{letter}</h2>
            <ul>
              {users[letter].map(user => (
                <ListItem {...user} key={user.id} activeUsers={ activeUsers}/>))}
            </ul>
          </div>
        ) : (
            <div key={index} className="letter-card">
              <h2>{letter}</h2>
              <p> No Employees</p>
            </div>))}
      </div>
    </Section>
   )
}

export default EmployeesList;