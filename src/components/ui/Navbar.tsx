// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          ReputationOne
        </Link>
        <nav className="flex gap-6 text-sm text-gray-300">
          <Link href="/features">Features</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/sign-in" className="bg-white text-black px-3 py-1 rounded-md">
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}
