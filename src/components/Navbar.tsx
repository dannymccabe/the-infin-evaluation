'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'For Businesses', href: '/businesses' },
    { text: 'For Individuals', href: '/individuals' },
    { text: 'Capitalism 2.0', href: '/capitalism' },
    { text: 'Marketing Efforts', href: '/marketing' },
  ];

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'navbar-scroll' : ''}`}>
        <div className="logo-container">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={isScrolled ? 189 : 513}
            height={isScrolled ? 33 : 90}
          />
        </div>
        <ul className={`${isScrolled ? 'ul-direction-change' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <button
          className="button"
          style={{
            width: isScrolled ? '108px' : '13.9375rem',
            height: isScrolled ? '45px' : '5.625rem',
          }}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
