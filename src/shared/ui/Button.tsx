import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  color?: 'default' | 'primary'
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  isLoading,
  color,
  ...props
}) => {
  return (
    <button
      className={cn(
        'p-5 text-sm leading-4 rounded-lg disabled:bg-opacity-70 inline-flex items-center justify-center',
        color === 'primary' && 'text-white bg-blue',
        color === 'default' && 'bg-lightGrey',
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <div
          className="inline-block -left-3 me-4 h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
      {children}
    </button>
  )
}
