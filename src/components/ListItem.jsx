import React from 'react';
import { useDispatch } from 'react-redux';
import { addActiveUsers, deleteActiveUsers } from '../redux/activeUsersSlice';


const ListItem = ({ id, firstName, lastName, dob, activeUsers }) => {

    const dispatch = useDispatch();
    const isActive = activeUsers.includes(id);

    const handleChange = event => {
        const statusValue = event.target.value === 'active' ? true : false;
        const userDob = `${new Date(dob).getDate()} ${ new Date(dob).toLocaleString('en-US', { month: 'long' })}, ${new Date(dob).getFullYear()} year`;
        statusValue ? dispatch(addActiveUsers({
            id,
            firstName,
            lastName,
            dob,
            userDob,
        }))
        : dispatch(deleteActiveUsers(id));
    };

    return (
        <li>
            <div className = {isActive ? "active" : "unactive"}>{firstName} {lastName}</div>
            <form>
                <div>
                    <input type="radio" id="сhoice1" value="unactive" checked={!isActive} onChange={handleChange} />
                    <label htmlFor ="сhoice1">not active</label>
                </div>
                <div>
                    <input type="radio" id="сhoice2" value="active" checked={isActive} onChange={handleChange}/>
                    <label htmlFor ="сhoice2">active</label>
                </div>   
            </form>
        </li>
   )
}

export default ListItem;
