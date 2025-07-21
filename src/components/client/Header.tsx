'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Settings, Folder, Mail, Bell } from 'lucide-react';

const Header = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    const currentPath = usePathname();

    const linkClasses = (path: string) =>
        `px-4 py-2 rounded hover:bg-indigo-100 transition ${
            currentPath === path ? 'font-bold text-indigo-700' : 'text-gray-700'
        }`;

    if (['/login', '/register'].includes(currentPath)) return;

    return (
        <header className="flex justify-between items-center h-16 px-8 bg-white shadow-md sticky top-0 z-50">
            <Link href="/" className="text-xl font-semibold text-indigo-600">
                GitShowcase
            </Link>
            <nav className="flex gap-6 items-center">
                {isAuthenticated ? (
                    <>
                        <Link
                            href="/projects"
                            className={linkClasses('/projects')}
                        >
                            <Folder className="inline mr-2" size={18} />
                            Projects
                        </Link>
                        <Link
                            href="/profile"
                            className={linkClasses('/profile')}
                        >
                            <User className="inline mr-2" size={18} />
                            Profile
                        </Link>
                        <Link
                            href="/settings"
                            className={linkClasses('/settings')}
                        >
                            <Settings className="inline mr-2" size={18} />
                            Settings
                        </Link>
                        <Link
                            href="/messages"
                            className={linkClasses('/messages')}
                        >
                            <Mail className="inline mr-2" size={18} />
                            Message
                        </Link>
                        <Link
                            href="/notifications"
                            className={linkClasses('/notifications')}
                        >
                            <Bell className="inline mr-2" size={18} />
                            Notification
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href="/projects"
                            className={linkClasses('/projects')}
                        >
                            Projects
                        </Link>
                        <Link href="/login" className={linkClasses('/login')}>
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className={linkClasses('/register')}
                        >
                            Signup
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
