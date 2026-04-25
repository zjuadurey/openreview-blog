import { profile } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-neutral-600 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {profile.name}</p>
        <p>Built with Next.js, Tailwind CSS, GitHub, and Vercel.</p>
      </div>
    </footer>
  );
}
