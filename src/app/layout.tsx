import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import SessionProvider from './SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    template: '%s | We-commerce',
    default: 'We-commerce',
  },
  description: 'Creating product for the family',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className='m-auto min-w-[300px] max-w-7xl p-4'>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
