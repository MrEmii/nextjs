import { ActiveLink } from './ActiveLink';
import styles from './navbar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(item => (
          <ActiveLink href={item.href}>{item.text}</ActiveLink>
        ))
      }
    </nav>
  )
}
