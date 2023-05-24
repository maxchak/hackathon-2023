declare const _brand: unique symbol

declare global {
  export type Email = string
  export type Id = number

  export type SnakeToCamelCase<S extends string> =
    S extends `${infer Head}_${infer Rest}`
      ? `${Head}${Capitalize<SnakeToCamelCase<Rest>>}`
      : S

  type SnakeToCamelCaseObject<T> = T extends object
    ? {
        [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseObject<
          T[K]
        >
      }
    : T

  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type RootState = import('../src/app/appStore').RootState
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type AppDispatch = import('../src/app/appStore').AppDispatch
}

export {}
