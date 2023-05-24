import { FC, ReactNode } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

interface Props {
  headerSlot?: ReactNode
}

export const Layout: FC<Props> = (props) => {
  return (
    <div>
      {props.headerSlot}
      <main className="container">
        <Outlet />
      </main>
      <footer></footer>
      <ScrollRestoration />
    </div>
  )
}
