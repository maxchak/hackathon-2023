export const saveTokenToLocalStorage = (
  accessToken: string,
  expiresIn: number,
) => {
  localStorage.setItem('_app-token', accessToken)
  localStorage.setItem('_app-token-exp', expiresIn.toString())
}
