import { FC, MouseEvent } from 'react'

type IconType = 'check'

interface Props {
  className?: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  type: IconType
}

export const Icon: FC<Props> = ({ type, onClick, className }) => {
  return (
    <div
      className={className}
      style={{ backgroundImage: `url("/images/${type}.svg")` }}
      onClick={onClick}
    />
  )
}
