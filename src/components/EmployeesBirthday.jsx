import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/usersSlice';
import { Section} from '../styles';


const EmployeesBirthday = () => {

  const activeUsers = useSelector(selectUsers);
  console.log(activeUsers);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const users = activeUsers.reduce((acc, user) => {
    const month = new Date(user.dob).getMonth();
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
      <div className="section-content">
        {months.map((month, index) =>
          users.hasOwnProperty(index) ? (
            <div key={index} className="letter-card">
              <h2>{month}</h2>
              <ul>
                {users[index].map(user =>   
                (<li {...user} key={user.id}>
                    <p>{user.firstName} {user.lastName} -<span>{user.userDob}</span></p>
                  </li>))}
              </ul>
            </div>
          ) : (
              <div key={index} className="letter-card">
                <h2>{month}</h2>
                <p> No Employees</p>
              </div>))}
      </div>
    </Section>
   )
}

export default EmployeesBirthday;
