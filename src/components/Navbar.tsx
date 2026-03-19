"use client";

import Link from "next/link";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-2 py-2">
      <Link
        href="/"
        className="text-xl font-semibold transition hover:text-sky-400"
      >
        JL
      </Link>

      <div className="flex items-center gap-6">
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2 text-sm text-gray-300 transition hover:border-sky-400 hover:text-white"
        >
          <Download size={16} />
          Resume
        </a>
      </div>
    </nav>
  );
}
