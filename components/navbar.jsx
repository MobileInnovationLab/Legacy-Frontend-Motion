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
            <Link href=''>
              <Image
                src={require('../public/navbar/logo-white-transparent.png')} 
                alt="Motion Logo" 
              />
            </Link>
          </div>
          <div className={styles['navbar-img-red']}>
            <Link href=''>
              <Image
                src={require('../public/navbar/logo-red-transparent.png')} 
                alt="Motion Logo" 
              />
            </Link>
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

        <svg width="32" height="32" className={styles.button} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 22.6667C4 23.403 4.59695 24 5.33333 24H26.6667C27.403 24 28 23.403 28 22.6667C28 21.9303 27.403 21.3333 26.6667 21.3333H5.33333C4.59695 21.3333 4 21.9303 4 22.6667ZM4 16C4 16.7364 4.59695 17.3333 5.33333 17.3333H26.6667C27.403 17.3333 28 16.7364 28 16C28 15.2636 27.403 14.6667 26.6667 14.6667H5.33333C4.59695 14.6667 4 15.2636 4 16ZM5.33333 8C4.59695 8 4 8.59695 4 9.33333C4 10.0697 4.59695 10.6667 5.33333 10.6667H26.6667C27.403 10.6667 28 10.0697 28 9.33333C28 8.59695 27.403 8 26.6667 8H5.33333Z" />
        </svg>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);