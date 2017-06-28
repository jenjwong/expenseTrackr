export const setLocalStorage = () => {
  localStorage.setItem('reduxState', JSON.stringify({ isLoggedIn: true }));
};

export const removeLocalStorage = () => {
  localStorage.removeItem('reduxState');
};
