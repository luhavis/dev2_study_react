import { SET_COLLECTION } from '../actions/collectionAction01';

const initState = {
  ids: [],
  entities: [],
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COLLECTION: {
      const ids = payload.map((entity) => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities };
    }
    default:
      return state;
  }
};
