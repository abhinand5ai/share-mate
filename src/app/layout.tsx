
/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/notes">
              Notes
            </Link>
            <Link href="/rides">
              Rides
            </Link>
            <Link href="/campaigns">
              Campaigns
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}