export const getUserInfo = (action) => ({
    type: 'GET_USER',
    users: action
    });
export const setUser = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => console.log(user))
   }