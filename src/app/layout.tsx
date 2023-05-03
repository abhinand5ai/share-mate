
/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';
import { Nunito } from "next/font/google"
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/Container';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'Share Mate',
  description: 'A decentralized ridesharing app built on Ethereum',
}

const font = Nunito(
  {
    subsets: ['latin'],
  }
)



export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal/>
          <Navbar></Navbar>
        </ClientOnly>
        {children}
      </body>
    </html>
  );

}

// export default function RootLayout({children,}: {children: React.ReactNode;}) {
//   return (
//     <html>
//       <body>
//         <main>
//           <nav>
//             <Link href="/">
//               Home
//             </Link>
//             <Link href="/notes">
//               Notes
//             </Link>
//             <Link href="/rides">
//               Rides
//             </Link>
//             <Link href="/campaigns">
//               Campaigns
//             </Link>
//           </nav>
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }