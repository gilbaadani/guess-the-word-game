export const HIDELETTER = letter => ({ type: 'HIDELETTER', payload: letter });
export const SHOWLETTERS = () => ({ type: 'SHOWLETTERS' });
export const VISIBLE = letter => ({ type: 'VISIBLE', payload: letter });
export const NEWWORD = wordArray => ({ type: 'NEWWORD', wordArray });
