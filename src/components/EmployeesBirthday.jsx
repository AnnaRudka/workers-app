import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveUsers } from '../redux/activeUsersSlice';
import { Section } from '../styles';
import { months } from '../constants/constants';

const EmployeesBirthday = () => {
  const activeUsers = [...useSelector(selectActiveUsers)].sort((a, b) =>
    a.lastName.localeCompare(b.lastName),
  );
  const startMonth = new Date().getMonth();
  const actualMonthArray = [
    ...[...months].splice(startMonth, months.length - startMonth),
    ...[...months].splice(0, startMonth),
  ];
  const users = activeUsers.reduce((acc, user) => {
    const month = new Date(user.dob).toLocaleString('en-US', { month: 'long' });
    if (acc[month]) {
      acc[month].push(user);
    } else {
      acc[month] = [user];
    }
    return acc;
  }, {});

  return (
    <Section>
      <h1 className="section-header">Employees birthday</h1>
      {!activeUsers.length ? (
        <p className="empty-message"> Employees List is empty</p>
      ) : (
        <div className="section-content">
          {actualMonthArray.map((month, index) =>
            users.hasOwnProperty(month) ? (
              <div key={index} className="letter-card">
                <h3>{month}</h3>
                <ul>
                  {users[month].map(user => (
                    <li key={user.id}>
                      <p>
                        {user.firstName} {user.lastName} -{' '}
                        <span>{user.userDob}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div key={index} className="letter-card">
                <h3>{month}</h3>
                <p> No Employees</p>
              </div>
            ),
          )}
        </div>
      )}
    </Section>
  );
};

export default EmployeesBirthday;
