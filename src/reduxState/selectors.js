import { createSelector } from 'reselect';
export const selectUserState = (reduxState) => reduxState.userState;

export const selectUser = createSelector(
    selectUserState,
    (userState) => userState.user
)