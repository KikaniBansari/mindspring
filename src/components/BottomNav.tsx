"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Clock, BookHeart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/mood', icon: Home, label: 'Home' },
  { href: '/history', icon: Clock, label: 'History' },
  { href: '/diary', icon: BookHeart, label: 'Diary' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-background/70 backdrop-blur-sm border-t mt-auto">
      <div className="flex justify-around items-center h-20 max-w-sm mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.label}
              className={cn(
                'flex flex-col items-center justify-center gap-1 w-16 text-muted-foreground transition-colors duration-300',
                isActive ? 'text-primary' : 'hover:text-foreground',
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
