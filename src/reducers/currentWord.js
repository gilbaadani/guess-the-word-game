export default function currentWord(state = [], action) {
  switch (action.type) {
    case 'VISIBLE':
      return state.map(item => {

        if (item.letter === action.payload) {
          return { ...item, isVisible: true };
        } else {
          return item;
        }
      });
    case 'NEWWORD':
      return action.wordArray;

    default:
      return state;
  }
}
