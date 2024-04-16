'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: scrollY > 100 ? 1 : 1, // Adjust opacity as needed
      y: scrollY > 100 ? -50 : 0,
    });
  }, [scrollY, controls]);

  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'For Businesses', href: '/businesses' },
    { text: 'For Individuals', href: '/individuals' },
    { text: 'Capitalism 2.0', href: '/capitalism' },
    { text: 'Marketing Efforts', href: '/marketing' },
  ];

  return (
    <motion.header initial={{ y: 0 }} animate={controls}>
      <motion.nav
        className="navbar"
        initial={{ opacity: 1 }}
        animate={controls}
      >
        <div className="logo-container">
          <motion.div
            initial={{ width: 513, height: 90 }}
            animate={
              scrollY > 100
                ? { width: 200, height: 50 }
                : { width: 513, height: 90 }
            }
            transition={{ duration: 1, ease: 'easeInOut' }} // Adjust duration and easing
          >
            <Image src="/assets/logo.svg" alt="Logo" width={513} height={90} />
          </motion.div>
        </div>
        <motion.ul>
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: scrollY > 100 ? -20 : 0 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.1 * index,
              }} // Adjust duration, easing, and delay
            >
              <Link href={link.href}>{link.text}</Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.button
          className="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }} // Adjust duration, easing, and delay
        >
          Contact
        </motion.button>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
