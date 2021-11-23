import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveUsers } from '../redux/activeUsersSlice';
import { selectUsers } from '../redux/usersSlice';
import { Section } from '../styles';
import ListItem from "./ListItem";


const EmployeesList = () => {

  const letterList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const users = useSelector(selectUsers);
  const usersList = [...users].sort((a, b) => a.firstName.localeCompare(b.firstName)).reduce((acc, user) => {
    const letter = user.firstName[0];
      if (acc[letter]) {
        acc[letter].push(user);
      } else {
        acc[letter] = [user];
      }
      return acc;
  }, {});
  const activeUsers = useSelector(selectActiveUsers).map(user => user.id);

  return (
    <Section>
      <h1 className="section-header">Employees</h1>
      <div className="section-content">
      {letterList.map((letter, index) =>
        usersList.hasOwnProperty(letter) ? (
          <div key={index} className="letter-card">
            <h2>{letter}</h2>
            <ul>
              {usersList[letter].map(user => (
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