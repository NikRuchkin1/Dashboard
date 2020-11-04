const initialState = {

  };

  const pizzas = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS':
        return {
          ...state,
        };

      default:
        return state;
    }
  };

  export default pizzas;