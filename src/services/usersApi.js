import axios from 'axios';

const apiUrl = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

export const getUsers = () => {
  return axios
    .get(apiUrl)
    .then(resp => resp.data)
    .catch(error => {
      console.log(error);
    });
};
