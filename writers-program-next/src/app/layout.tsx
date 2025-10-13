import type { Metadata } from "next";
import './globals.css';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        {/* Footer will go here */}
      </body>
    </html>
  );
}
