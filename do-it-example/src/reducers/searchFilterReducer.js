import { RESET_FILTER, SET_FILTER } from '../actions/searchFilterActions';

const initState = {};

export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER: {
      const { filterName, value } = payload;
      return {
        ...state,
        [filterName]: value, // 여러 검색 조건을 조합할 수 있도로 기존 검색 항목과, 새 검색 항목을 객체형태로 결합 {name:'jone'}, {age:30} => {name='jone', age:30}
      };
    }

    case RESET_FILTER: {
      return initState;
    }

    default:
      return state;
  }
}
