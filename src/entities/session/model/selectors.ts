export const isAuthenticated = (state: RootState) => !!state.session.user

export const user = (state: RootState) => state.session.user

export const userRole = (state: RootState) => state.session.user?.idRole
