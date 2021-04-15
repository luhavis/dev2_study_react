import {
  LOADING_TRANSACTION_LIST,
  SET_TRANSACTION_LIST,
} from "../actions/transactionActions";

const initState = {
  ids: [],
  entities: {},
  loading: false,
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING_TRANSACTION_LIST: {
      return {
        ...state,
        loading: true,
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
