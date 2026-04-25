import { ExternalLink } from "lucide-react";
import type { AcademicEntry } from "@/lib/data";

type EntryCardProps = {
  entry: AcademicEntry;
};

const statusTone: Record<AcademicEntry["status"], string> = {
  Blog: "border-review-redLine bg-review-redSoft text-review-redDark",
  "Paper Note": "border-slate-300 bg-slate-50 text-slate-700",
  Project: "border-review-blue/30 bg-blue-50 text-review-blue",
  Draft: "border-amber-300 bg-amber-50 text-amber-800",
  Accepted: "border-review-green/30 bg-emerald-50 text-review-green",
};

export function EntryCard({ entry }: EntryCardProps) {
  return (
    <article className="border border-line bg-paper shadow-line">
      <div className="border-l-4 border-review-red px-4 py-4 sm:px-5">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span
            className={`inline-flex items-center border px-2 py-0.5 font-medium ${statusTone[entry.status]}`}
          >
            {entry.status}
          </span>
          <span className="text-neutral-500">{entry.date}</span>
          {entry.venue ? (
            <span className="text-neutral-500">/ {entry.venue}</span>
          ) : null}
        </div>

        <h2 className="mt-3 text-lg font-semibold leading-snug text-review-redDark">
          {entry.title}
        </h2>

        <p className="mt-1 text-sm text-neutral-600">{entry.authors}</p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-700">
          {entry.summary}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {entry.keywords.map((keyword) => (
            <span
              key={keyword}
              className="border border-neutral-200 bg-field px-2 py-0.5 text-xs text-neutral-600"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {entry.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 font-medium text-review-red hover:underline"
            >
              {link.label}
              <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
