import { handle } from "redux-pack";
import {
  LOADING_TRANSACTION_LIST,
  SET_ERROR,
  SET_TRANSACTION_LIST,
} from "../actions/transactionActions";
import { FETCH_TRANSACTION_LIST } from "../actions/transactionPackActions";

const initState = {
  ids: [],
  entities: {},
  loading: false,
  hasError: false,
  pagination: {},
};

export default (state = initState, action) => {
  const { type, payload, meta } = action;

  switch (type) {
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        // case LOADING_TRANSACTION_LIST와 동일
        start: (prevState) => ({
          ...prevState,
          loading: true,
          hasError: false,
        }),
        // case SET_TRANSACTION_LIST와 유사
        success: (prevState) => {
          const { data } = payload;
          const { pageNumber, pageSize } = meta || {};
          const ids = data.map((entity) => entity["id"]);
          const entities = data.reduce(
            (finalEntities, entity) => ({
              ...finalEntities,
              [entity["id"]]: entity,
            }),
            {}
          );
          return {
            ...prevState,
            ids,
            entities,
            loading: false,
            hasError: false,
            pagination: {
              number: pageNumber,
              size: pageSize,
            },
          };
        },
        // case SET_ERROR와 유사
        failure: (prevState) => {
          const { errorMessage } = payload.response.data;
          return {
            ...prevState,
            loading: false,
            hasError: true,
            errorMessage,
          };
        },
      });
    }
    case SET_ERROR: {
      const { errorMessage } = payload;
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage,
      };
    }
    case LOADING_TRANSACTION_LIST: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case SET_TRANSACTION_LIST: {
      const ids = payload.map((entity) => entity["id"]);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity["id"]]: entity,
        }),
        {}
      );
      return {
        ...state,
        ids,
        entities,
        loading: false,
        hasError: false,
      };
    }
    default:
      return state;
  }
};
