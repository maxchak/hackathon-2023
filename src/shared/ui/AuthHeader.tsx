import { Link } from 'react-router-dom'

export const AuthHeader = () => {
  return (
    <div className="mb-2 py-7 text-center border-b border-b-black/[.05]">
      <Link to="/">
        <img className="inline-block" src="./images/logo.png" alt="logo" />
      </Link>
    </div>
  )
}
