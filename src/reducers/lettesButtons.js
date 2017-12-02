export default function lettesButtons(state = [], action) {
  switch (action.type) {
    case 'HIDELETTER':
      return state.map(item => {
        if (item.letter === action.payload) {
          return { ...item, isVisible: false };
        } else {
          return item;
        }
      });
    case 'SHOWLETTERS':
      return state.map(item => {
        return { ...item, isVisible: true };
      });

    default:
      return state;
  }
}
