import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'For Businesses', href: '/businesses' },
    { text: 'For Individuals', href: '/individuals' },
    { text: 'Capitalism 2.0', href: '/capitalism' },
    { text: 'Marketing Efforts', href: '/marketing' },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <Image src="/assets/logo.svg" alt="Logo" width={513} height={90} />
        </div>
        <ul>
          {/* Map over the array of navigation links */}
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <button className="button">Contact</button>
      </nav>
    </header>
  );
};

export default Navbar;
