import { Plus_Jakarta_Sans } from 'next/font/google';
import '../globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

export const metadata = { title: 'Admin — Maleo AI' };

export default function AdminLayout({ children }) {
  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <body className={`${font.className} antialiased bg-slate-50`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
