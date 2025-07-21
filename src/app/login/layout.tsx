import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'GitShowcase | Login',
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
