import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BMSS Alumni North America',
  description: 'Member portal for BMSS Alumni North America'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
