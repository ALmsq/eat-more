

export default (state = [], { type, payload }) => {
    switch (type) {
      case 'GET_ORDER':
        return payload;
      case "ADD_ORDER":
          return [...state, payload]
      default:
        return state;
    }
  };