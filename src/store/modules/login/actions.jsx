export function login(payload) {
  return {
    type: 'login/GET',
    payload,
  };
}

export function logout() {
  return {
    type: 'login/SET',
  };
}
