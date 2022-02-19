export const unauthenticatedMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    return next(action)
  }
