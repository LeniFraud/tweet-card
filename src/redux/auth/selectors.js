export const selectUser = state => state.auth.user;
export const selectUserName = state => state.authData.user.name;
export const selectIsLoggedIn = state => state.authData.isLoggedIn;
export const selectIsRefreshing = state => state.authData.isRefreshing;
