export function checkFingerPrint() {
  const savedFingerprint = localStorage.getItem('_app-fp')

  if (savedFingerprint) return

  const fingerprint =
    Date.now().toString(36) +
    Math.random().toString(36).substring(2, 5) +
    Math.random().toString(36).substring(2, 5)

  localStorage.setItem('_app-fp', fingerprint)
}
