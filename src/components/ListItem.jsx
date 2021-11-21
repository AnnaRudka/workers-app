import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers, deleteUsers} from '../redux/usersSlice';


const ListItem = ({ id, firstName, lastName, dob, activeUsers}) => {
    const [select, setSelect] = useState("notActive");
    const [styled, setStyled] = useState("inactive");
    const dispatch = useDispatch();

    //Too many re-renders. React limits the number of renders to prevent an infinite loop.
    // if (activeUsers.includes(id)) {
    //     setSelect("active");
    // };

  const handleSelectChange = event => {
    const value = event.target.value;
      setSelect(value);
      if (value === 'active') {
          setStyled("active");
          const userDob = `${new Date(dob).getDate()} ${ new Date(dob).toLocaleString('en-US', { month: 'long' })}, ${new Date(dob).getFullYear()} year`;
          dispatch(addUsers({
              id,
              firstName,
              lastName,
              dob,
              userDob,
            }));  
      } else {
          setStyled("activated");
          dispatch(deleteUsers({
                id
            }));  
      }
  };
 
    return (
        <li>
            <div className={styled}>{firstName} {lastName}</div>
            <form>
                <div>
                    <input type="radio" id="сhoice1" value="notActive" checked={select === "notActive"} onChange={event => handleSelectChange(event)} />
                    <label htmlFor ="сhoice1">not active</label>
                </div>
                <div>
                    <input type="radio" id="сhoice2" value="active" checked={select === "active"} onChange={event => handleSelectChange(event)} />
                    <label htmlFor ="сhoice2">active</label>
                </div>   
            </form>
        </li>
   )
}

export default ListItem;
