import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'GitShowcase | Project',
};

export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
