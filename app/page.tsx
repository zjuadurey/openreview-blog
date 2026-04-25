import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { EntryCard } from "@/components/EntryCard";
import { blogPosts, profile, publications } from "@/lib/data";

const latestEntries = [...blogPosts.slice(0, 2), publications[0]];

export default function Home() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:py-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-review-red">
              Academic Portfolio
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {profile.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
              {profile.about}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="border border-review-redLine bg-review-redSoft px-2.5 py-1 text-sm text-review-redDark"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <aside className="border border-line bg-field p-4">
            <div className="border-l-4 border-review-red bg-white p-4">
              <h2 className="text-lg font-semibold text-review-redDark">
                {profile.name}
              </h2>
              <p className="mt-1 text-sm text-neutral-700">
                {profile.affiliation}
              </p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm text-neutral-600">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                {profile.location}
              </p>
              <dl className="mt-4 grid gap-3 text-sm">
                <div>
                  <dt className="font-medium text-neutral-900">Focus</dt>
                  <dd className="mt-1 text-neutral-600">
                    Research notes, paper reviews, reproducible projects.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-neutral-900">Style</dt>
                  <dd className="mt-1 text-neutral-600">
                    Compact academic entries with OpenReview-like red accents.
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-review-red">
              Recent Activity
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-ink">
              Latest entries
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-review-red hover:underline"
          >
            View all posts
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4">
          {latestEntries.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>
    </>
  );
}
