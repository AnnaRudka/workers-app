import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveUsers } from '../redux/activeUsersSlice';
import { selectUsers } from '../redux/usersSlice';
import { Section } from '../styles';
import Employee from './Employee';
import { letterList } from '../constants/constants';

const EmployeesList = () => {
  const users = useSelector(selectUsers);
  const usersList = [...users]
    .sort((a, b) => a.firstName.localeCompare(b.firstName))
    .reduce((acc, user) => {
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
      <h2 className="section-header">Employees</h2>
      <div className="section-content">
        {letterList.map((letter, index) =>
          usersList.hasOwnProperty(letter) ? (
            <div key={index} className="letter-card">
              <h3>{letter}</h3>
              <ul>
                {usersList[letter].map(user => (
                  <Employee {...user} key={user.id} activeUsers={activeUsers} />
                ))}
              </ul>
            </div>
          ) : (
            <div key={index} className="letter-card">
              <h3>{letter}</h3>
              <p> No Employees</p>
            </div>
          ),
        )}
      </div>
    </Section>
  );
};

export default EmployeesList;
