import camelcaseKeys from 'camelcase-keys'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toCamelCase = function <T>(input: any) {
  return camelcaseKeys(input, { deep: true }) as SnakeToCamelCaseObject<T>
}
