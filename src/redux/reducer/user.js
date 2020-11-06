const initialState = {
  users: [],
  currentUser: [],
  albums: [],
  photo: [],
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USER':
        return {
          ...state,
          users: action.users,
        };
      case 'CURRENT_USER':
        return {
          ...state,
          currentUser: action.currentUser,
        };

      default:
        return state;
    }
  };

  export default userReducer;