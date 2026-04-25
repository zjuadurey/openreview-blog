import { EntryCard } from "@/components/EntryCard";
import { PageTitle } from "@/components/PageTitle";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <>
      <PageTitle
        eyebrow="Projects"
        title="Code, experiments, and artifacts"
        description="A compact project index for repositories, demos, datasets, and reproducibility notes."
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-4">
          {projects.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>
    </>
  );
}
