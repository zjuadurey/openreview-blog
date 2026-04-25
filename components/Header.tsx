import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link
            href="/"
            className="text-xl font-semibold text-review-redDark hover:text-review-red"
          >
            {profile.name}
          </Link>
          <p className="mt-1 text-sm text-neutral-600">{profile.affiliation}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex flex-wrap items-center gap-1 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-transparent px-3 py-1.5 text-neutral-700 hover:border-review-redLine hover:bg-review-redSoft hover:text-review-redDark"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 border-l border-line pl-3">
            <a
              href={profile.github}
              aria-label="GitHub"
              className="p-2 text-neutral-600 hover:bg-review-redSoft hover:text-review-red"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="p-2 text-neutral-600 hover:bg-review-redSoft hover:text-review-red"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
