'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-[#6c47ff]">
              YourApp
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Connect', 'About Us'].map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              return (
                <Link
                  key={item}
                  href={href}
                  className="text-gray-700 hover:text-[#6c47ff] font-medium transition-colors"
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-700 hover:text-[#6c47ff] font-medium transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-5 hover:bg-[#5a3de0] transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#6c47ff] hover:bg-gray-100"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Services', 'Connect', 'About Us'].map((item) => {
                const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <Link
                    key={item}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6c47ff] hover:bg-gray-50"
                  >
                    {item}
                  </Link>
                );
              })}

              <div className="pt-4 pb-3 border-t border-gray-200 mt-3">
                <div className="flex flex-col space-y-3 px-3">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="text-gray-700 hover:text-[#6c47ff] font-medium text-left">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="w-full bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-5 hover:bg-[#5a3de0] transition-colors">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex justify-center py-2">
                      <UserButton />
                    </div>
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}