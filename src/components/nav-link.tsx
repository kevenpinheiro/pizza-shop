import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  // capturando o pathname da rota
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="font-font-medium flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
