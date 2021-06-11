import { createSelector } from 'reselect';
export const selectUserState = (reduxState) => reduxState.userState;

/**
 * Selectors can compute derived data, allowing Redux to store the minimal possible state.
 * Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
 * Selectors are composable. They can be used as input to other selectors.
 */
export const selectUser = createSelector(
    selectUserState,
    (userState) => userState.user
)

export const selectToken = createSelector(
    selectUserState,
    (userState) => userState.token
)