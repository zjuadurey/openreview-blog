import { EntryCard } from "@/components/EntryCard";
import { PageTitle } from "@/components/PageTitle";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <PageTitle
        eyebrow="Blog"
        title="Research notes and essays"
        description="Short posts organized like reviewable academic entries: clear claim, context, summary, and links."
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-4">
          {blogPosts.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>
    </>
  );
}
