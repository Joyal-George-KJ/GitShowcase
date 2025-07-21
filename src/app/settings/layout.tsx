import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'GitShowcase | Settings',
};

export default function SettingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
