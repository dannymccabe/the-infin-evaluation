import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <Image src="/assets/logo.svg" alt="Logo" width={1880} height={341} />
      </div>
      <div className="copyright">
        <Image
          src="/assets/copyright-logo.svg"
          alt="Logo"
          width={18}
          height={22}
        />
        <p className="copyright-mark">
          © 2024 • Curated by <span>ThinkSeb</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
