const initialState = [
  {
    name: 'Burger King'
  },
  {
    name: 'McDo'
  }
];

export const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [
        ...state,
        {name: action.name}
      ];
    default:
      return state;
  }
};
