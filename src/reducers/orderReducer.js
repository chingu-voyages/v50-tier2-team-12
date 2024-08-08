export default function orderReducer(state, action) {
  switch (action.type) {
    case 'ADD_ORDER': {
      // pass menu item as payload

      const { menu, quantity } = action.payload;
      const index = state.findIndex((item) => item.id === menu.id);

      if (index >= 0) {
        const updatedState = [...state];
        updatedState.splice(index, 1, {
          ...state[index],
          quantity: state[index].quantity + quantity,
        });

        return updatedState;
      }

      return [
        ...state,
        {
          ...menu,
          quantity: quantity,
        },
      ];
    }

    case 'REMOVE_ORDER': {
      // pass menu id as payload

      const id = action.payload;

      const updatedOrders = state.filter((item) => item.id !== id);

      return [...updatedOrders];
    }

    case 'INCREMENT_QUANTITY': {
      // pass menu id as payload

      const id = action.payload;
      const index = state.findIndex((item) => item.id === id);

      if (index >= 0) {
        const updatedState = [...state];
        updatedState.splice(index, 1, {
          ...state[index],
          quantity: state[index].quantity + 1,
        });

        return updatedState;
      }
      return [...state];
    }

    case 'DECREMENT_QUANTITY': {
      // pass menu id as payload

      const id = action.payload;
      const index = state.findIndex((item) => item.id === id);

      if (index >= 0) {
        const updatedState = [...state];
        updatedState.splice(index, 1, {
          ...state[index],
          quantity: state[index].quantity === 1 ? 1 : state[index].quantity - 1,
        });

        return updatedState;
      }
      return [...state];
    }

    case 'CLEAR': {
      return [];
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
