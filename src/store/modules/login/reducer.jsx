const defaultState = null;

export default function login(state = defaultState, { type, payload }) {
  switch (type) {
    case 'login/GET':
      return payload;

    case 'login/SET':
      return defaultState;

    default:
      return state;
  }
}
