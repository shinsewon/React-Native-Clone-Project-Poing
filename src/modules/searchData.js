// import produce from 'immer';
import produce from 'immer';
import { createAction, handleActions, handleAction } from 'redux-actions';

//액션 타입 생성
const CHANGE_INPUT = 'searchData/CHANGE_INPUT';
const INSERT = 'searchData/INSERT';
const REMOVE = 'searchData/REMOVE';

//액션생성함수 생성
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 0;
export const insert = createAction(INSERT, (title) => ({
  id: id++,
  title,
}));

export const remove = createAction(REMOVE, (id) => id);

//초기값 설정
const initialState = {
  input: '',
  search: [
    {
      id: '',
      title: '',
    },
  ],
};

//리듀서 작성
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
