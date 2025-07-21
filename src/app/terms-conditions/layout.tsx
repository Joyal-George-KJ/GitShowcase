import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'GitShowcase | Terms And Conditions',
};

export default function TermsAndConditionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
