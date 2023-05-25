import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
  headerSlot?: ReactNode
}

export const Layout: FC<Props> = (props) => {
  return (
    <div>
      {props.headerSlot}
      <main className="container px-5">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}
