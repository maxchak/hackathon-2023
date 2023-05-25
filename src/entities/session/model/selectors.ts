export const isAuthenticated = (state: RootState) => !!state.session.user
export const isAuthLoading = (state: RootState) => state.session.isLoading
export const isUserInitialized = (state: RootState) => state.session._isInit
export const user = (state: RootState) => state.session.user
export const userRole = (state: RootState) => state.session.user?.idRole
