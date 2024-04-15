import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../../styles/main.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
