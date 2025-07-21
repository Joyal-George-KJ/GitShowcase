import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'GitShowcase | Signup',
};

export default function SignupLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
