import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '@/components/client/Footer';
import Header from '@/components/client/Header';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'GitShowcase | Home',
    description:
        "GitShowcase is your space to highlight what you've built, share your journey, and stand out in the developer community",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} relative antialiased text-white min-h-dvh max-w-dvw`}
            >
                <Header isAuthenticated={false} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
