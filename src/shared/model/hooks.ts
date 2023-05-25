import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from 'react-redux'

export const useAppDispatch = useDispatch<AppDispatch>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
