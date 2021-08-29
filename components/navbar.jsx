import Link from 'next/link';
import Image from 'next/image';
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/components/navbar.module.scss'

function Navbar({ router }, props) {
  const [navbar, setNavbar] = useState(false);

  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Product', href: '/product' },
    { text: 'Achievement', href: '/achievement' },
    { text: 'Blog', href: '/blog' },
    // { text: '', href: '' },
  ];

  const scrollDown = ()=> {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollDown);
    return ()=>{
      window.removeEventListener('scroll', scrollDown);
    }
  }, [])
  
  return (
    <nav className={`${styles['navbar-main']} ${navbar && styles['active']}`}>
      <div className={styles['flex-container']}>
          <div className={styles['container']}>
            <div className={styles['navbar-img-white']}>
              <Image
                src={require('../public/navbar/logo-white-transparent.png')} 
                alt="Motion Logo" 
              />
            </div>
            <div className={styles['navbar-img-red']}>
              <Image
                src={require('../public/navbar/logo-red-transparent.png')} 
                alt="Motion Logo" 
              />
            </div>

            <ul className={styles['nav-links']}>
              { navs.map(nav => (
              <li><Link href={nav.href}>
                <a className={`${styles['nav-item']} ${styles[`${ router.pathname == nav.href ? 'active' : '' }`]}`}>{nav.text}</a>
              </Link></li>
              )) }
            </ul>
          </div>

          <Link href="/">
            <a className={styles['nav-side']}>Recruitment</a>
          </Link>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);