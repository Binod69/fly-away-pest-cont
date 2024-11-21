import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Fly Away Pest Control Qld',
  description: 'Best Pest Control in Australia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
