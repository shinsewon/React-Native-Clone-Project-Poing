import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'searchData/CHANGE_INPUT';
const INSERT = 'searchData/INSERT';
const REMOVE = 'searchData/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 0;
export const insert = createAction(INSERT, (title) => ({
  id: id++,
  title,
}));

export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  search: [
    {
      id: '',
      title: '',
    },
  ],
};

const searchData = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft.search.push(data);
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const idx = draft.search.findIndex((item) => item.id === id);
        draft.search.splice(idx, 1);
      }),
  },
  initialState
);
export default searchData;
