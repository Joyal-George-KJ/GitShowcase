import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'GitShowcase | Profile',
};

export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
