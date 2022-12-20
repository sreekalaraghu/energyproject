import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/pricing">1920</CustomLink>
        <CustomLink to="/about">1930</CustomLink>
        <CustomLink to="/home">1940</CustomLink>
        <CustomLink to="/year3">1950</CustomLink>
        <CustomLink to="/year4">1960</CustomLink>
        <CustomLink to="/year5">1970</CustomLink>
        <CustomLink to="/year6">1980</CustomLink>
        <CustomLink to="/year7">1990</CustomLink>
        <CustomLink to="/year8">2000</CustomLink>
        <CustomLink to="/year9">2010</CustomLink>
        <CustomLink to="/year10">2020</CustomLink>
        <CustomLink to="/year11">2030</CustomLink>
        <CustomLink to="/year12">2040</CustomLink>
        <CustomLink to="/year13">2050</CustomLink>
      </ul>
      <div><Link to="/" className="nav">
       About
      </Link>
        About
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}