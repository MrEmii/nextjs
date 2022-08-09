import Link from "next/link"
import { useRouter } from "next/router"

export const ActiveLink = ({ href, children }) => {

  const {asPath} = useRouter();

  const style = {
    color:'#0070f3',
    textDecoration: 'none',
    fontWeight: asPath === href ? 'bold' : 'normal'
  }


  return (
    <Link href={href}>
      <a style={style}>
        {children}
      </a>
    </Link>
  )
}