import { forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  border?: 'none' | 'solid' | 'dashed'
  shadow?: boolean
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ border = 'none', shadow, className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'w-full py-5 px-2 text-sm leading-4 rounded-lg bg-white text-grey text-center focus-visible:outline-0 placeholder-grey',
          border === 'solid' && 'border border-grey',
          border === 'dashed' && 'border border-grey border-dashed',
          shadow && 'drop-shadow-[0_4px_42px_rgba(0,0,0,0.08)]',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
