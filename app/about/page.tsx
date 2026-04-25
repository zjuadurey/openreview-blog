import { Github, Mail, MapPin } from "lucide-react";
import { PageTitle } from "@/components/PageTitle";
import { profile } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <PageTitle
        eyebrow="About"
        title={profile.name}
        description={profile.about}
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[0.72fr_0.28fr]">
        <article className="border border-line bg-white p-5">
          <h2 className="border-b border-line pb-3 text-xl font-semibold text-review-redDark">
            Research profile
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-6 text-neutral-700">
            <p>
              Replace this page with your own biography, research interests,
              selected collaborations, teaching, and service. The layout is
              intentionally text-forward so it can support a CV-like academic
              profile without becoming a marketing page.
            </p>
            <p>
              The site keeps a submission-system rhythm: compact sections,
              consistent metadata, red accents, and clear links for papers,
              code, slides, and notes.
            </p>
          </div>
        </article>

        <aside className="border border-line bg-white p-5">
          <h2 className="text-base font-semibold text-ink">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-neutral-700">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-review-red hover:underline"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              className="inline-flex items-center gap-2 text-review-red hover:underline"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
              GitHub
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              {profile.location}
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
