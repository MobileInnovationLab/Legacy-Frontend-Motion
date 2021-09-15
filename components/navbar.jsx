import Link from 'next/link';
import Image from 'next/image';
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/components/navbar.module.scss'

function Navbar({ router }, props) {
  const [navbar, setNavbar] = useState(false);
  const [navModals, setNavModals] = useState(false);
  const [aboutExpand, setAboutExpand] = useState(false);

  const navs = [
    { text: 'Home', href: '/' },
    {
      text: 'About', href: '', dropDown: [
        { text: 'About Us', href: '/about' },
        { text: 'Our Activity', href: '/activity' },
        { text: 'Contact Us', href: '/contact' },
      ]
    },
    { text: 'Product', href: '/product' },
    { text: 'Achievement', href: '/achievement' },
    { text: 'Blog', href: '/blog' },
    // { text: '', href: '' },
  ];

  const scrollDown = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  const expandAboutItem = () => {
    if (aboutExpand === true) {
      setAboutExpand(false);
    } else {
      setAboutExpand(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollDown);
    return () => {
      window.removeEventListener('scroll', scrollDown);
    }
  }, [])

  console.log(props.white)

  return (
    <>
      <nav className={`${styles['navbar-main']} ${(navbar || navModals) && styles['active']} ${props.white && styles.white}`}>
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
              {navs.map(nav => (
                <li className={styles['style-hover']} key={nav.text}><Link href={nav.href}>
                  <a className={`${styles['nav-item']} ${styles[`${(router.pathname == nav.href) || (nav?.dropDown?.find(navItem => navItem.href == router.pathname)) ? 'active' : ''}`]}`}>{nav.text}</a>
                </Link>
                  {'dropDown' in nav &&
                    <ul className={`${styles['about-dropdown']} ${aboutExpand && styles.active}`}>
                      {nav.dropDown.map(navHover => (
                        <>
                          <li><Link href={navHover.href}>
                            <a>{navHover.text}</a>
                          </Link></li>
                          <hr />
                        </>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>
            {/* 
            <ul className={styles['about-dropdown']}>
              <li><Link href='/'>
                <a>About Us</a>
              </Link></li>
              <li><Link href='/'>
                <a>Our Activity</a>
              </Link></li>
              <li><Link href='/'>
                <a>Contact Us</a>
              </Link></li>
            </ul> */}

          </div>

          <Link href="/">
            <a className={styles['nav-side']}>Recruitment</a>
          </Link>

          <button className={`${styles['button-change']} ${navModals && styles.inactive}`} onClick={() => setNavModals(true)}>
            <svg width="32" height="32" className={styles.button} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 22.6667C4 23.403 4.59695 24 5.33333 24H26.6667C27.403 24 28 23.403 28 22.6667C28 21.9303 27.403 21.3333 26.6667 21.3333H5.33333C4.59695 21.3333 4 21.9303 4 22.6667ZM4 16C4 16.7364 4.59695 17.3333 5.33333 17.3333H26.6667C27.403 17.3333 28 16.7364 28 16C28 15.2636 27.403 14.6667 26.6667 14.6667H5.33333C4.59695 14.6667 4 15.2636 4 16ZM5.33333 8C4.59695 8 4 8.59695 4 9.33333C4 10.0697 4.59695 10.6667 5.33333 10.6667H26.6667C27.403 10.6667 28 10.0697 28 9.33333C28 8.59695 27.403 8 26.6667 8H5.33333Z" />
            </svg>
          </button>
          <button className={`${styles.exit} ${navModals && styles.active}`} onClick={() => setNavModals(false)}>
            <svg width="28" height="29" viewBox="0 0 28 29" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.12615 5.30921C4.51353 5.9437 4.51353 6.97242 5.12615 7.60691L11.7816 14.5L5.12615 21.3931C4.51353 22.0276 4.51353 23.0563 5.12615 23.6908C5.73876 24.3253 6.732 24.3253 7.34461 23.6908L14 16.7977L20.6554 23.6908C21.268 24.3253 22.2613 24.3253 22.8739 23.6908C23.4865 23.0563 23.4865 22.0276 22.8739 21.3931L16.2185 14.5L22.8739 7.60691C23.4865 6.97242 23.4865 5.94371 22.8739 5.30921C22.2613 4.67472 21.268 4.67472 20.6554 5.30921L14 12.2023L7.34461 5.30921C6.732 4.67472 5.73876 4.67472 5.12615 5.30921Z" />
            </svg>
          </button>
        </div>
      </nav>
      <div className={styles["nav-under-inactive"]}>
        <nav className={`${styles['nav-modals-inactive']} ${navModals && styles['active']}`}>
          <ul className={styles['nav-links-active']}>
            <li className={styles['nav-items-active']}><Link href='/'>
              <a>Home</a>
            </Link></li>
            <li className={styles['nav-items-active']}>
              <a onClick={() => setAboutExpand(!aboutExpand)}>About</a>
              <div className={`${styles['about-expand']} ${styles.active}`}>
                <hr />
                <div className={styles['about-link']}>
                  <Link href='/about'>
                    <a>About Us</a>
                  </Link>
                </div>
                <div className={styles['about-link']}>
                  <Link href='/activity'>
                    <a>Our Activity</a>
                  </Link>
                </div>
                <div className={styles['about-link']}>
                  <Link href='/contactUs'>
                    <a>Contact Us</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles['nav-items-active']}><Link href='/product'>
              <a>Product</a>
            </Link></li>
            <li className={styles['nav-items-active']}><Link href='/achievement'>
              <a>Achievement</a>
            </Link></li>
            <li className={styles['nav-items-active']}><Link href='/blog'>
              <a>Blog</a>
            </Link></li>
          </ul>
        </nav>
      </div>
      <div className={`${styles['bg-nav-inactive']} ${navModals && styles.active}`} onClick={() => setNavModals(false)} />
    </>
  );
}

export default withRouter(Navbar);