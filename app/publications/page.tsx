import { EntryCard } from "@/components/EntryCard";
import { PageTitle } from "@/components/PageTitle";
import { publications } from "@/lib/data";

export default function PublicationsPage() {
  return (
    <>
      <PageTitle
        eyebrow="Publications"
        title="Papers, notes, and bibliographic entries"
        description="Publication records use an abstract-first layout with status labels, venue metadata, keywords, and external resources."
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-4">
          {publications.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>
    </>
  );
}
