import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        <span>Foodies</span>
        <span className="text-red-600">BNB</span>
      </Link>
      <div className="space-x-4">
        <Link href="/aplicar" className="text-gray-700 hover:text-red-600">Aplicar</Link>
        <Link href="/dashboard" className="text-gray-700 hover:text-red-600">Dashboard</Link>
        <Link href="/login" className="text-gray-700 hover:text-red-600">Login</Link>
      </div>
    </nav>
  );
} 